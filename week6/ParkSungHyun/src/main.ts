interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let todos: Todo[] = [];

const STORAGE_KEY = "psh_todos";

function saveTodos(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (_) {
    // localStorage 저장 실패 시 무시
  }
}

function isTodo(item: unknown): item is Todo {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  
  // Object.hasOwn을 사용하여 속성 존재 확인 (ES2022)
  // 또는 Object.prototype.hasOwnProperty.call 사용 가능
  const hasId = Object.prototype.hasOwnProperty.call(item, 'id');
  const hasText = Object.prototype.hasOwnProperty.call(item, 'text');
  const hasDone = Object.prototype.hasOwnProperty.call(item, 'done');
  
  if (!hasId || !hasText || !hasDone) {
    return false;
  }
  
  // 타입 단언 없이 속성 값 확인을 위해 Reflect.get 사용
  const idValue = Reflect.get(item, 'id');
  const textValue = Reflect.get(item, 'text');
  const doneValue = Reflect.get(item, 'done');
  
  return (
    typeof idValue === 'number' &&
    typeof textValue === 'string' &&
    typeof doneValue === 'boolean'
  );
}

function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // 타입 가드를 사용하여 Todo[]인지 확인
      return parsed.filter(isTodo);
    }
    return [];
  } catch (_) {
    return [];
  }
}

const formElement = document.getElementById("todo-form");
const inputElement = document.getElementById("todo-input");
const listElement = document.getElementById("todo-list");

if (!formElement || !(formElement instanceof HTMLFormElement)) {
  throw new Error("Required DOM element 'todo-form' not found");
}
if (!inputElement || !(inputElement instanceof HTMLInputElement)) {
  throw new Error("Required DOM element 'todo-input' not found");
}
if (!listElement || !(listElement instanceof HTMLUListElement)) {
  throw new Error("Required DOM element 'todo-list' not found");
}

const form: HTMLFormElement = formElement;
const input: HTMLInputElement = inputElement;
const list: HTMLUListElement = listElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo);
    saveTodos();
    render();
    input.value = "";
  }
});

function deleteTodo(id: number): void {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  render();
}

function toggleDone(id: number): void {
  todos = todos.map((t) =>
    t.id === id ? { ...t, done: !t.done } : t
  );
  saveTodos();
  render();
}

function render(): void {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const actions = document.createElement("div");
    actions.className = "actions";

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "btn-delete";
    delBtn.onclick = () => deleteTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "btn-edit";
    editBtn.onclick = () => updateTodo(todo.id, li);

    actions.appendChild(delBtn);
    actions.appendChild(editBtn);

    li.appendChild(span);
    li.appendChild(actions);
    list.appendChild(li);
  });
}

function updateTodo(id: number, li: HTMLLIElement): void {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  // 간단히: 기존 내용을 지우고 입력창 + 완료 버튼만 보여줌
  li.innerHTML = "";

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = todo.text;

  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = "완료";

  const commit = (): void => {
    const newText = inputEl.value.trim();
    if (!newText) {
      render();
      return;
    }
    // id, done 변경 없이 text만 수정하고 현재 li만 갱신
    todo.text = newText;
    saveTodos();
    li.innerHTML = "";
    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const actions = document.createElement("div");
    actions.className = "actions";

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "삭제";
    delBtn.className = "btn-delete";
    delBtn.onclick = () => deleteTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.textContent = "수정";
    editBtn.className = "btn-edit";
    editBtn.onclick = () => updateTodo(todo.id, li);

    actions.appendChild(delBtn);
    actions.appendChild(editBtn);

    li.className = todo.done ? "done" : "";
    li.appendChild(span);
    li.appendChild(actions);
  };

  confirmBtn.onclick = commit;
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") commit();
  });

  li.appendChild(inputEl);
  li.appendChild(confirmBtn);
  inputEl.focus(); // 입력창에 키보드 포커스를 줘서 커서가 깜빡이게 만들고, 사용자가 바로 타이핑할 수 있게 함
}

// 초기 로드
todos = loadTodos();
render();


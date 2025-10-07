let todos = [];

const STORAGE_KEY = "psh_todos";

function saveTodos() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (_) {}
}

function loadTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return [];
  } catch (_) {
    return [];
  }
}

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo);
    saveTodos();
    render();
  }
});
function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  render();
}

function toggleDone(id) {
  todos = todos.map((t) =>
    t.id === id ? { ...t, done: !t.done } : t
  );
  saveTodos();
  render();
}

function render() {
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
function updateTodo(id, li) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  // 간단히: 기존 내용을 지우고 입력창 + 완료 버튼만 보여줌
  li.innerHTML = "";

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = todo.text;

  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = "완료";

  const commit = () => {
    const newText = inputEl.value;
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


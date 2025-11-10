interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let todos: Todo[] = [];

const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

if (!form || !input || !list) {
  throw new Error("필요한 DOM 요소를 찾을 수 없습니다.");
}

form.addEventListener("submit", (e: SubmitEvent): void => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo);
    render();
    input.value = "";
  }
});

function deleteTodo(id: number): void {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id: number): void {
  console.log("done!");
  todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  render();
}

function render(): void {
  if (!list) return;
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = (): void => toggleDone(todo.id);

    const div = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.onclick = (): void => updateTodo(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = (): void => deleteTodo(todo.id);

    li.appendChild(span);
    div.appendChild(editBtn);
    div.appendChild(delBtn);
    li.appendChild(div);
    list.appendChild(li);
  });
}

function updateTodo(id: number): void {
  if (!list) return;

  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) return;

  const li = list.children[idx] as HTMLLIElement | undefined;
  if (!li) return;

  if (li.querySelector('input[type="text"]')) return;

  const span = li.querySelector("span") as HTMLSpanElement | null;
  const buttons = li.querySelectorAll("div > button") as NodeListOf<HTMLButtonElement>;
  const editBtn = buttons[0];
  const delBtn = buttons[1];
  if (!span || !editBtn || !delBtn) return;

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = span.textContent ?? "";
  inputEl.style.marginRight = "8px";
  li.insertBefore(inputEl, span);
  li.removeChild(span);

  const save = (): void => {
    const newText = inputEl.value.trim();
    if (newText) {
      const todo = todos.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    }
    render();
  };

  const cancel = (): void => {
    render();
  };

  editBtn.textContent = "저장";
  editBtn.onclick = save;

  delBtn.textContent = "취소";
  delBtn.onclick = cancel;
}

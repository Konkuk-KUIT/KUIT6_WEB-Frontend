interface Todo {
  id: number;
  text: string;
  done: boolean;
}

let todos: Todo[] = [];

const form = document.getElementById("todo-form") as HTMLFormElement | null;
const input = document.getElementById("todo-input") as HTMLInputElement | null;
const list = document.getElementById("todo-list") as HTMLUListElement | null;

form?.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  if (!input) return;
  const text = input.value.trim();
  if (text) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo);
    render();
  }
});

function deleteTodo(id: number): void {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id: number): void {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    }
    return todo;
  });
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
    span.onclick = () => toggleDone(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "delete";
    delBtn.onclick = () => deleteTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "edit";
    editBtn.onclick = () => updateTodo(todo.id);

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.appendChild(delBtn);
    btnGroup.appendChild(editBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    list.appendChild(li);
  });
}

function updateTodo(id: number): void {
  if (!list) return;

  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  const li = Array.from(list.children).find((el) => {
    const span = el.querySelector("span");
    const input = el.querySelector("input");
    return (
      (span && span.textContent === todo.text) ||
      (input && (input as HTMLInputElement).value === todo.text)
    );
  });

  if (!li) return;

  const span = li.querySelector("span");
  const delBtn = li.querySelector(".delete") as HTMLButtonElement | null;
  const editBtn = li.querySelector(".edit") as HTMLButtonElement | null;

  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;

  if (span) li.replaceChild(input, span);
  if (delBtn) delBtn.style.display = "none";

  // 저장하기
  if (editBtn) {
    editBtn.onclick = () => {
      const newText = input.value.trim();
      if (newText) todo.text = newText;
      render();
    };
  }
}

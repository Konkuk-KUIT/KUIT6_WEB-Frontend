interface Todo {
  id: number;
  text: string;
  done: boolean;
  editing: boolean;
}

let todos: Todo[] = [];

const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;
const template = document.getElementById("todo-template") as HTMLTemplateElement;

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      done: false,
      editing: false,
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
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  render();
}

function updateTodo(id: number): void {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, editing: !todo.editing } : todo
  );
  render();
}

function render(): void {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const clone = template.content.cloneNode(true) as DocumentFragment;

    const li = clone.querySelector("li") as HTMLLIElement;
    const span = clone.querySelector(".todo-text") as HTMLSpanElement;
    const delBtn = clone.querySelector(".delete-btn") as HTMLButtonElement;
    const editBtn = clone.querySelector(".edit-btn") as HTMLButtonElement;

    li.dataset.id = String(todo.id);
    if (todo.done) li.classList.add("done");
    else li.classList.remove("done");

    if (todo.editing) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text;
      editInput.onblur = () => {
        const value = editInput.value.trim();
        if (value) todo.text = value;
      };
      li.insertBefore(editInput, span);
      span.remove();
    } else {
      span.textContent = todo.text;
      span.onclick = () => toggleDone(todo.id);
    }

    delBtn.onclick = () => deleteTodo(todo.id);
    editBtn.onclick = () => updateTodo(todo.id);

    list.appendChild(clone);
  });
}

let todos = [];

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
    input.value = "";
    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
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

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function updateTodo(id, newText) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, text: newText } : todo
  );
  render();
}
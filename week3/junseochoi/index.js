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
    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter((item) => item.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map((item) =>
    item.id === id ? { ...item, done: !item.done } : item
  );
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const div = document.createElement("div");

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.className = todo.done ? "done" : "";
    span.onclick = () => toggleDone(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "delBtn";
    delBtn.onclick = () => deleteTodo(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "수정";
    updateBtn.className = "updateBtn";
    updateBtn.onclick = () => updateTodo(todo.id);

    li.appendChild(span);
    li.appendChild(div);
    div.appendChild(delBtn);
    div.appendChild(updateBtn);
    list.appendChild(li);
  });
}

function updateTodo(id) {
  const li = [...list.children].find(
    (li) =>
      li.querySelector("span") &&
      todos.some(
        (t) => t.id === id && t.text === li.querySelector("span").textContent
      )
  );
  if (!li) return;

  const todo = todos.find((item) => item.id === id);

  const span = li.querySelector("span");
  const btnDiv = li.querySelector("div");

  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  input.onkeydown = (e) => {
    if (e.key === "Enter") {
      span.textContent = input.value;
      li.innerHTML = "";
      li.appendChild(span);
      li.appendChild(btnDiv);
    }
    if (e.key === "Escape") render();
  };

  li.innerHTML = "";
  li.appendChild(input);
  li.appendChild(btnDiv);
  input.focus();
}

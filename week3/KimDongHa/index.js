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
    input.value = ""
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  console.log("done!")
  todos = todos.map((t) =>
    t.id === id ? { ...t, done: !t.done } : t
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

    const div = document.createElement("div");

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.onclick = () => updateTodo(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    div.appendChild(editBtn);
    div.appendChild(delBtn);
    li.appendChild(div);
    list.appendChild(li);
  });
}

function updateTodo(id) {
  const idx = todos.findIndex((t) => t.id === id);
  if (idx === -1) return;

  const li = list.children[idx];
  if (!li) return;

  if (li.querySelector('input[type="text"]')) return;

  const span = li.querySelector("span");
  const [editBtn, delBtn] = li.querySelectorAll("div > button");

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.value = todos[idx].text;
  inputEl.style.marginRight = "8px";
  li.insertBefore(inputEl, span);
  li.removeChild(span);

  const save = () => {
    const newText = inputEl.value.trim();
    if (newText) todos[idx].text = newText;
    render();
  };

  const cancel = () => {
    render();
  };

  editBtn.textContent = "저장";
  editBtn.onclick = save;

  delBtn.textContent = "취소";
  delBtn.onclick = cancel;
}

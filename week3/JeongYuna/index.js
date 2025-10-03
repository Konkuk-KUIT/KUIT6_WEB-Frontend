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
    input.value = "";
  }
  saveTodos();
});

loadTodos();
render();

function loadTodos() {
  let lst = window.localStorage.getItem("todo-list");

  if (lst) todos = JSON.parse(lst);
}

function saveTodos() {
  window.localStorage.setItem("todo-list", JSON.stringify(todos));
}

function deleteTodo(id) {
  todos = todos.filter( (t) => t.id !== id);
  saveTodos();
  render();
}

function toggleDone(id) {
  const isDone = todos.find((t) => t.id === id).done;
  todos.find((t) => t.id === id).done = !isDone;
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
    span.classList.add("todo");
    span.onclick = () => toggleDone(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.classList.add("update");
    updateBtn.textContent = "수정";
    updateBtn.onclick = () => updateTodo(todo.id, li);

    const delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const btns = document.createElement("div");
    btns.appendChild(updateBtn);
    btns.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btns);
    list.appendChild(li);
  });
}


function updateTodo(id, li) {
  const todo = todos.find((t) => t.id === id);
  const txt = todo.text;

  const inp = document.createElement("input");
  inp.style.width
  inp.value = txt;

  let newTxt = "";

  const span = li.querySelector("span");
  li.replaceChild(inp, span);

  const btns = li.querySelector("div");
  
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "저장";
  saveBtn.classList.add("save");

  const quitBtn = document.createElement("button");
  quitBtn.textContent = "취소";
  quitBtn.classList.add("delete");

  const div = document.createElement("div");
  div.appendChild(saveBtn);
  div.appendChild(quitBtn);

  li.replaceChild(div, btns);

  let save = () => {
    newTxt = inp.value.trim();
    todo.text = newTxt || txt;
    render();
  }
  
  inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") save();
  });

  saveBtn.onclick = save;
  quitBtn.onclick = render;

  saveTodos();
}
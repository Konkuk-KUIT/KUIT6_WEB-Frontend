let todos = [];
let idx = 0;

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
    // todos.push(newTodo);
    todos.splice(idx, 0, newTodo);
    render();
    input.value = "";
  }
  idx++;
  saveTodos();
});

loadTodos();
render();

function loadTodos() {
  let lst = window.localStorage.getItem("todo-list");
  let lastIdx = window.localStorage.getItem("todo-index");

  if (lst) todos = JSON.parse(lst);
  idx = lastIdx || 0;
}

function saveTodos() {
  if (idx < 0) idx = 0;
  window.localStorage.setItem("todo-index", idx);
  window.localStorage.setItem("todo-list", JSON.stringify(todos));
}

function deleteTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return; // 못 찾으면 그대로 둠
  let todo = todos[index];
  if (!todo.done) idx--;  // 완료되지 않은 요소의 마지막 인덱스 감소

  todos = todos.filter( (t) => t.id !== id );

  saveTodos();
  render();
}

function toggleDone(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return; // 못 찾으면 그대로 둠

  let todo = todos[index];
  const isDone = todo.done;
  todo.done = !isDone;
  
  if (todo.done) {
    todos.splice(index, 1); // 위치에서 빼기
    todos.push(todo);
    idx--;
    console.log(idx);
  } else {
    todos.splice(index, 1);
    todos.splice(idx, 0, todo);
    idx++;
    console.log(idx);
  }

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
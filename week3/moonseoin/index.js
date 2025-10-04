let todos = [];

function loadTodos() {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos = JSON.parse(saved);
    render();
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
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
    input.value = "";
    saveTodos();
    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
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
    // span.onclick = () => toggleDone(todo.id);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "delete";
    delBtn.onclick = () => deleteTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "edit";
    editBtn.onclick = () => updateTodo(todo.id);

    const btnBox = document.createElement("div");
    btnBox.className = "btn-box";
    btnBox.appendChild(delBtn);
    btnBox.appendChild(editBtn);

    li.appendChild(span);
    li.appendChild(btnBox);
    list.appendChild(li);
  });
}

function updateTodo(id) {
  // 수정할 todo 찾기
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  // 해당 li 찾기
  const li = [...list.children].find((el) => el.querySelector("span")?.textContent === todo.text);
  if (!li) return;

  // li 비우기
  li.innerHTML = "";

  // input 생성
  const inputBox = document.createElement("input");
  inputBox.type = "text";
  inputBox.value = todo.text;

  // 저장 버튼
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "저장";
  saveBtn.className = "save";
  saveBtn.onclick = () => {
    const newText = inputBox.value.trim();
    if (newText) {
      todos = todos.map((t) => (t.id === id ? { ...t, text: newText } : t));
      saveTodos();
      render();
    }
  };

  li.appendChild(inputBox);
  li.appendChild(saveBtn);
}

loadTodos();

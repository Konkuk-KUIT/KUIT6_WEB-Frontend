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
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, done: !todo.done };
    }
    return todo;
  });
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
function updateTodo(id) {
  // 수정 버튼 클릭시
  // li요소에 input 태그와 버튼 등장
  // id, done은 바뀌면 안됨
  // 버튼 누르면 input태그 사라짐, todo가 수정 완료
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  const li = [...list.children].find(el => {
    const span = el.querySelector("span");
    const input = el.querySelector("input");
    return (span && span.textContent === todo.text) || (input && input.value === todo.text);
  });
  if (!li) return;

  const span = li.querySelector("span");
  const delBtn = li.querySelector(".delete");
  const editBtn = li.querySelector(".edit");

  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;

  li.replaceChild(input, span);
  if (delBtn) delBtn.style.display = "none";

  // 저장하기
  editBtn.onclick = () => {
    const newText = input.value.trim();
    if (newText) todo.text = newText;
    render();
  };
}


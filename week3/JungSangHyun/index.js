let todos = JSON.parse(localStorage.getItem("todos")) || [];

// DOM에서 태그를 가리키는 객체 -> DOM조작 메소드 사용가능 
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

render();

// localStorage 저장 함수
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

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
    saveTodos();
    render(); // 화면 동기화 
  }
});

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);

  saveTodos();
  render();
}

function toggleDone(todo) {
  if (todo.done) {
    todo.done = false;
  }
  else {
    todo.done = true;
  }

  saveTodos();
  render();
}

function render() {
  list.innerHTML = ""; // todo-list 초기화 
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo);

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "todo-list__button";

    const delBtn = document.createElement("button");
    delBtn.className = "todo-list__button--delete";
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.className = "todo-list__button--update";
    updateBtn.textContent = "수정";
    updateBtn.onclick = () => updateTodo(todo, li); // 현재 <li>를 넘겨야 remove가능 

    li.appendChild(span);
    li.appendChild(buttonDiv);
    buttonDiv.appendChild(delBtn);
    buttonDiv.appendChild(updateBtn);
    list.appendChild(li);
  });
}

function updateTodo(todo, li) {
  li.innerHTML = ""; // 해당 <li>의 자식 요소 제거 

  const updateDiv = document.createElement("div");
  updateDiv.className = "todo-list__input--update";

  const updateInput = document.createElement("input");
  updateInput.id = "todo-update-input";
  updateInput.required = true; // 입력값 필요
  updateInput.placeholder = todo.text;

  const updateInputButton = document.createElement("button");
  updateInputButton.className = "todo-list__button--update";
  updateInputButton.textContent = "수정";

  updateDiv.appendChild(updateInput);
  updateDiv.appendChild(updateInputButton);
  li.appendChild(updateDiv);

  updateInputButton.onclick = () => {
    if (updateInput.value.trim() === "") {
      alert("값을 입력하세요!");
      render();

      return;
    }
    todo.text = updateInput.value;
    updateDiv.remove(); // 수정 form 삭제

    saveTodos();
    render();
  }
}

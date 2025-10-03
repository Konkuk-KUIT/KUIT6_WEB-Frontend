let todos = [];

// DOM에서 태그를 가리키는 객체 -> DOM조작 메소드 사용가능 
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
    render(); // 화면 동기화 
  }
});

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)

  render();
}

function toggleDone(todo) {
  if (todo.done) {
    todo.done = false;
  }
  else {
    todo.done = true;
  }

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

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "수정";
    updateBtn.onclick = () => updateTodo(todo.id);

    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(updateBtn);
    list.appendChild(li);
  });
}

// todo localStorage 사용까지 

// JS로 삭제버튼 만든 것 처럼 만들기 
function updateTodo() {
  // 수정 버튼 클릭시
  // 각 Li요소에 input 태그, 버튼 등장
  // id와 done은 변경 X (다른 상태들)
  // 버튼 누르면 Input 태그 사라지고, todo가 수정 완료 
}

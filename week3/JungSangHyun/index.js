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
    render(); // 화면 동기화 
  }
});

function deleteTodo(id) {}

function toggleDone(id) {}

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

// JS로 삭제버튼 만든 것 처럼 만들기 
function updateTodo() {
  // 수정 버튼 클릭시
  // 각 Li요소에 input 태그, 버튼 등장
  // id와 done은 변경 X (다른 상태들)
  // 버튼 누르면 Input 태그 사라지고, todo가 수정 완료 
}

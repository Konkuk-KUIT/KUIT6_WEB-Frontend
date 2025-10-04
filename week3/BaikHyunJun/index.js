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

//삭제
function deleteTodo(id) {

  const todoIndex = todos.findIndex(todo => todo.id === id);
  

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    render(); 
  }
}

//토글
function toggleDone(id) {
  
  const todo = todos.find(todo => todo.id === id);
  

  if (todo) {
    todo.done = !todo.done;
    render(); 
  }
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

    const uptBtn = document.createElement("button");
    uptBtn.textContent = "수정";
    uptBtn.onclick = () => updateTodo(todo.id, span);


    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";
    buttonContainer.appendChild(delBtn);
    buttonContainer.appendChild(uptBtn);

    li.appendChild(span);
    li.appendChild(buttonContainer);
    list.appendChild(li);
  });
}

//수정
function updateTodo(id, spanElement) {
  const todo = todos.find(todo => todo.id === id);
  if (!todo) return;


  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;
  input.style.border = "1px solid #ccc";
  input.style.padding = "5px";
  input.style.fontSize = "inherit";
  input.style.flex = "1";


  const parent = spanElement.parentNode;
  spanElement.remove();
  parent.insertBefore(input, parent.firstChild);


  input.focus();
  input.select();


  input.onkeydown = (e) => {
    if (e.key === "Enter") {
      const newText = input.value.trim();
      if (newText) {
        todo.text = newText;
      }
      render();
    }
    if (e.key === "Escape") {
      render(); // 취소 → 원래대로 복구
    }
  };


  input.onblur = () => {
    const newText = input.value.trim();
    if (newText) {
      todo.text = newText;
    }
    render();
  };
}


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
});

function deleteTodo(id) {
  todos = todos.filter( (t) => t.id !== id);
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


// function updateTodo(id, li) {
//   const todo = todos.find((t) => t.id === id);
//   const txt = todo.text;

//   const inp = document.createElement("input");
//   inp.value = txt;

//   let newTxt = "";

//   const span = li.querySelector("span");
//   li.replaceChild(inp, span);
  
//   inp.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") todos.find((t) => t.id === id).value = newTxt || txt;
//   });

//   // render();
// }


function updateTodo(id, li) {
  const todo = todos.find((t) => t.id === id);
  if (!todo || !li) return;

  const span = li.querySelector("span");
  if (!span) return;

  // input 생성 및 교체
  const inp = document.createElement("input");
  inp.type = "text";
  inp.value = todo.text;
  li.replaceChild(inp, span);

  inp.focus();
  inp.select();

  const save = () => {
    const v = inp.value.trim();
    if (v) todo.text = v;
    render(); // 주석 처리하면 안 되나? 했는데 blur에서 렌더 안됨
  };

  inp.addEventListener("keydown", (e) => {
    if (e.key === "Enter") save();
    if (e.key === "Escape") render();
    // render(); <- 여기다 놓으면 모든 키보드 입력에서 렌더 해버림
  });
  inp.addEventListener("blur", save);
}
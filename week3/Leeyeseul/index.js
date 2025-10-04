let todos = [];

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const template = document.getElementById("todo-template");

// 할 일 추가
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
      editing: false,
    };
    todos.push(newTodo);
    render();
  }
});

// 삭제
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

// 완료 
function toggleDone(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  render();
}

// 수정 
function updateTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, editing: !todo.editing } : todo
  );
  render();
}

function render() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector("li");
    const span = clone.querySelector(".todo-text");
    const delBtn = clone.querySelector(".delete-btn");
    const editBtn = clone.querySelector(".edit-btn");

    li.dataset.id = todo.id;
    if (todo.done) li.classList.add("done");

    if (todo.editing) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text;
      editInput.onblur = (e) => {
        todo.text = e.target.value;
      };
      li.insertBefore(editInput, span);
      span.remove();
    } else {
      span.textContent = todo.text;
      span.onclick = () => toggleDone(todo.id);
    }

    delBtn.onclick = () => deleteTodo(todo.id);
    editBtn.onclick = () => updateTodo(todo.id);

    list.appendChild(clone);
  });
}

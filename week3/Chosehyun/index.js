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

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  render();
}

function toggleDone(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : todo
  );
  render();
}
function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");

    if (todo.isEditing) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text;
      
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "저장";
      saveBtn.className = "update";
      saveBtn.onclick = () => {
        if (editInput.value.trim()) {
          updateTodo(todo.id, editInput.value.trim());
        }
      };

      li.appendChild(editInput);
      li.appendChild(saveBtn);
      
      setTimeout(() => editInput.focus(), 0);
      
    } else {
      const span = document.createElement("span");
      span.textContent = todo.text;
      span.style.cursor = "pointer";
      span.className =  todo.done ? "done" : "";
      span.onclick = () => toggleDone(todo.id);

      const delBtn = document.createElement("button");
      delBtn.className = "delete";
      delBtn.textContent = "삭제";
      delBtn.onclick = () => deleteTodo(todo.id);

      const updBtn = document.createElement("button");
      updBtn.className = "update";
      updBtn.textContent = "수정";
      updBtn.onclick = () => updateTodo(todo.id);

      li.appendChild(span);
      li.appendChild(delBtn);
      li.appendChild(updBtn);
    }
    list.appendChild(li);
  });
}

function updateTodo(id, newText) {
  if (newText === undefined) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: true } : { ...todo, isEditing: false }
    );
  } else {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText, isEditing: false } : todo
    );
  }
  render();
}
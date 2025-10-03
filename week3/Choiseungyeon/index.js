let todos = [];
let editingId = null;     
let onOutsideClick = null;  

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const STORAGE = window.localStorage;  //TODO LIST라면 세션보다는 로컬스토리지 저장이 더 적합할 것 같음
const STORAGE_KEY = "todolist";

load();
render();

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
    persist();
    input.value = "";
    render();
  }
});

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  persist();
  render();
}

function toggleDone(id) {
  todos = todos.map((t) => // 수정 중 항목은 input이라 이벤트 발생 X
    t.id === id ? { ...t, done: !t.done } : t // id유지, done만 반전
  );
  persist();
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const Btn = document.createElement("div");
    Btn.className = "btn-div";
    //Btn.appendChild(delBtn);
    //Btn.appendChild(editBtn);

    if (editingId === todo.id) {
      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text;

      editInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") saveEdit(todo.id, editInput.value);
        if (e.key === "Escape") cancelEdit();
      });

      const saveBtn = document.createElement("button");
      saveBtn.textContent = "저장";
      saveBtn.className = "save-btn";
      saveBtn.onclick = () => saveEdit(todo.id, editInput.value);

      li.appendChild(editInput);
      Btn.appendChild(saveBtn);
      li.appendChild(Btn);
    } else {
      const span = document.createElement("span");
      span.textContent = todo.text;
      span.style.cursor = "pointer";
      span.onclick = () => toggleDone(todo.id);

      const delBtn = document.createElement("button");
      delBtn.textContent = "삭제";
      delBtn.className = "delete-btn";
      delBtn.onclick = () => deleteTodo(todo.id);

      const editBtn = document.createElement("button");
      editBtn.textContent = "수정";
      editBtn.className = "edit-btn";
      editBtn.onclick = () => updateTodo(todo.id, todo.done);

      li.appendChild(span);
      Btn.appendChild(editBtn);
      Btn.appendChild(delBtn);
      li.appendChild(Btn);
    }

    list.appendChild(li);
  });
}
function updateTodo(id, done) {
  editingId = id;
  render();

  if (onOutsideClick) {
    document.removeEventListener("click", onOutsideClick, true);
  }
  onOutsideClick = function (e) {
    const editingLi = Array.from(list.children).find((li, idx) => {
      const todo = todos[idx];
      return todo && todo.id === editingId;
    });
    if (editingLi && editingLi.contains(e.target)) return;
    cancelEdit();
  };
  document.addEventListener("click", onOutsideClick, true);
}

function saveEdit(id, newTextRaw) {
  const newText = (newTextRaw || "").trim();
  if (!newText) {
    cancelEdit();
    return;
  }
  todos = todos.map((t) =>
    t.id === id ? { ...t, text: newText } : t
  ); // id/done 유지, text만 변경
  persist();
  cancelEdit();
}

function cancelEdit() {
  editingId = null;
  if (onOutsideClick) {
    document.removeEventListener("click", onOutsideClick, true);
    onOutsideClick = null;
  }
  render();
}

function persist(){
   try {
    STORAGE.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.warn("저장실패", e);
  }
}

function load() {
  try {
    const raw = STORAGE.getItem(STORAGE_KEY);
    todos = raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("로딩실패", e);
    todos = [];
  }
}

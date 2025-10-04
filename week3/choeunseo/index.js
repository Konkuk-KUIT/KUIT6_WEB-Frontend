let todos = [];
let editingId = null;

const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// --- LocalStorage 설정 ---
const STORAGE_KEY = "todos_v1";

function save() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ todos, editingId: null }) // 편집상태는 저장 안함
    );
  } catch (e) {
    console.error("save failed:", e);
  }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed?.todos)) {
      todos = parsed.todos;
    }
  } catch (e) {
    console.warn("load failed, resetting storage:", e);
    todos = [];
  }
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
    input.value = "";
    render();
    save();
    input.focus();
  }
});

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    //화살표 함수!! filter : 아이디 같지 않은 (삭제하려는 id빼고) 함수남기기
    render();
    save();
}

function toggleDone(id) {
    todos = todos.map(t => t.id===id ? {...t, done: !t.done} : t)
    //화살표 함수! 아이디 같으면 완료상태(done)으로 바꾸기, 아니면 그대로 냅둠 
    render();
    save();
}

function updateTodo(id) {
  editingId = id;
  render();
}

function render() {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    if (todo.id === editingId) {
      //수정버튼 누르면 렌더링 다르게!!!

      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = todo.text;
      editInput.className = "edit-input";

      const aditbtns = document.createElement("div");
      aditbtns.classList.add("btns")

      const okBtn = document.createElement("button");
      okBtn.textContent = "완료";
      okBtn.onclick = () => finishEdit(todo.id, editInput.value);

      const cancelBtn = document.createElement("button");
      cancelBtn.type = "button";
      cancelBtn.textContent = "취소";
      cancelBtn.onclick = () => cancelEdit();

      aditbtns.append(okBtn, cancelBtn);
      li.appendChild(editInput);
      li.appendChild(aditbtns);
      list.appendChild(li);
      save();
    }
    else{
    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);
    //누르면 미션 성공
    
    const btns = document.createElement("div");
    btns.classList.add("btns")

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    //delBtn.classList.add("todo-btn", "delete");
    delBtn.onclick = () => deleteTodo(todo.id);

    const resBtn = document.createElement("button");
    resBtn.textContent = "수정";
    //resBtn.classList.add("todo-btn", "edit");
    resBtn.onclick = () => updateTodo(todo.id);

    btns.append(resBtn, delBtn);
    li.appendChild(span);
    li.appendChild(btns);
    list.appendChild(li);
    save();
    }
  });
}
function finishEdit(id, value) {
  const text = String(value ?? "").trim();
  // ?? -> null병합 연산자, null undefinded상태인지 판단해줌
  if (!text) { 
    // 비었으면 저장 안 함
    cancelEdit();
    return;
  }
  todos = todos.map(t => t.id === id ? { ...t, text: text} : t);
  // 키 이름과 변수 이름이 같으면 생략할 수도 있음! -> { ...t, text}
  editingId = null;
  render();
}
function cancelEdit() {
  editingId = null;
  render();
}

load();
render();

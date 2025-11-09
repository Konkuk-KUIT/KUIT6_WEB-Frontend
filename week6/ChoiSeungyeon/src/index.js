let todos = [];
let editingId = null;
let onOutsideClick = null;
// type narrow 방식 사용
const formElement = document.getElementById("todo-form");
const inputElement = document.getElementById("todo-input");
const listElement = document.getElementById("todo-list");
if (!(formElement instanceof HTMLFormElement)) {
    throw new Error("폼 요소를 찾을 수 없습니다.");
}
if (!(inputElement instanceof HTMLInputElement)) {
    throw new Error("입력 요소를 찾을 수 없습니다.");
}
if (!(listElement instanceof HTMLUListElement)) {
    throw new Error("리스트 요소를 찾을 수 없습니다.");
}
//narrow된 요소 재할당
const form = formElement;
const input = inputElement;
const list = listElement;
const STORAGE = window.localStorage;
const STORAGE_KEY = "todolist";
load();
render();
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text.length > 0) {
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
     t.id === id ? Object.assign(Object.assign({}, t), { done: !t.done }) : t // id유지, done만 반전
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
        if (editingId === todo.id) {
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = todo.text;
            editInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter")
                    saveEdit(todo.id, editInput.value);
                if (e.key === "Escape")
                    cancelEdit();
            });
            const saveBtn = document.createElement("button");
            saveBtn.textContent = "저장";
            saveBtn.className = "save-btn";
            saveBtn.onclick = () => saveEdit(todo.id, editInput.value);
            li.appendChild(editInput);
            Btn.appendChild(saveBtn);
            li.appendChild(Btn);
        }
        else {
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
        const editingLi = Array.from(list.children).find((liElement, idx) => {
            const todo = todos[idx];
            return todo !== undefined && editingId === todo.id && liElement instanceof HTMLLIElement;
        });
        if (!editingLi) {
            cancelEdit();
            return;
        }
        const target = e.target;
        if (!(target instanceof Node)) {
            return;
        }
        if (editingLi.contains(target)) {
            return;
        }
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
    todos = todos.map((t) => t.id === id ? Object.assign(Object.assign({}, t), { text: newText }) : t);
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
function persist() {
    try {
        STORAGE.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
    catch (e) {
        console.warn("저장실패", e);
    }
}
//로딩 시 타입 가드
function isTodo(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const maybeId = value.id;
    const maybeText = value.text;
    const maybeDone = value.done;
    return (typeof maybeId === "number" &&
        typeof maybeText === "string" &&
        typeof maybeDone === "boolean");
}
function load() {
    try {
        const raw = STORAGE.getItem(STORAGE_KEY);
        if (!raw) {
            todos = [];
            return;
        }
        const parsed = JSON.parse(raw);
        // 타입 가드로 안전하게 배열만 받기
        if (Array.isArray(parsed)) {
            const result = [];
            for (const item of parsed) {
                if (isTodo(item)) {
                    result.push(item);
                }
            }
            todos = result;
        }
        else {
            todos = [];
        }
    }
    catch (e) {
        console.warn("로딩 실패", e);
        todos = [];
    }
}

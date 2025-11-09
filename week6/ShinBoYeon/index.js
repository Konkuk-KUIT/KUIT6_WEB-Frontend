let todos = [];
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
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
    todos = todos.filter((t) => t.id !== id);
    render();
}
function toggleDone(id) {
    todos = todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
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
        span.onclick = () => toggleDone(todo.id);
        const div = document.createElement("div");
        const editBtn = document.createElement("button");
        editBtn.textContent = "수정";
        editBtn.className = "btn-edit";
        editBtn.onclick = () => updateTodo(todo.id);
        const delBtn = document.createElement("button");
        delBtn.textContent = "삭제";
        delBtn.className = "btn-del";
        delBtn.onclick = () => deleteTodo(todo.id);
        li.appendChild(span);
        div.appendChild(editBtn);
        div.appendChild(delBtn);
        li.appendChild(div);
        list.appendChild(li);
    });
}
function updateTodo(id) {
    // 수정 버튼 클릭 시
    // 각 li 요소에 input 태그와 버튼 등장
    // id, done은 바뀌면 안됨
    // 버튼 누르면 input 태그 사라짐, todo가 수정 완료.
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1)
        return;
    const todo = todos[index];
    if (!todo)
        return;
    const li = list.children.item(index);
    if (!(li instanceof HTMLLIElement))
        return;
    const input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter")
            save();
        if (e.key === "Escape")
            render();
    });
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "수정";
    saveBtn.className = "btn-edit";
    saveBtn.onclick = save;
    li.innerHTML = "";
    li.appendChild(input);
    li.appendChild(saveBtn);
    input.focus();
    function save() {
        const newText = input.value.trim();
        if (newText)
            todos = todos.map(t => (t.id === id ? { ...t, text: newText } : t));
        render();
    }
}
export {};
//# sourceMappingURL=index.js.map
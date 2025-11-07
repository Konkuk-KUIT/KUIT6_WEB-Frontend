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
    todos = todos.filter(todo => todo.id !== id);
    render();
}
function toggleDone(id) {
    todos = todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo);
    render();
}
function render() {
    list.innerHTML = "";
    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.dataset.id = String(todo.id);
        const span = document.createElement("span");
        span.textContent = todo.text;
        span.style.cursor = "pointer";
        span.onclick = () => toggleDone(todo.id);
        span.className = todo.done ? "done" : "";
        const delBtn = document.createElement("button");
        delBtn.className = "delete";
        delBtn.textContent = "삭제";
        delBtn.onclick = () => deleteTodo(todo.id);
        const modifyBtn = document.createElement("button");
        modifyBtn.className = "modify";
        modifyBtn.textContent = "수정";
        modifyBtn.onclick = () => updateTodo(todo.id);
        li.appendChild(span);
        li.appendChild(delBtn);
        li.appendChild(modifyBtn);
        list.appendChild(li);
    });
}
function updateTodo(id) {
    // const targetLi = [...list.children].find(
    //   (child) => child.dataset.id === String(id)
    // );
    const targetLi = list.querySelector(`li[data-id="${id}"]`);
    if (!targetLi)
        return;
    targetLi.innerHTML = "";
    const input = document.createElement("input");
    input.type = "text";
    input.value = todos.find(todo => todo.id === id)?.text ?? "";
    input.style.flex = "1";
    const doneBtn = document.createElement("button");
    doneBtn.className = "modify";
    doneBtn.textContent = "완료";
    doneBtn.onclick = () => {
        const newText = input.value.trim();
        if (!newText)
            return;
        todos = todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo);
        render();
    };
    targetLi.appendChild(input);
    targetLi.appendChild(doneBtn);
}
export {};
//# sourceMappingURL=index.js.map
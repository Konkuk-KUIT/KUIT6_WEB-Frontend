let todos = [];

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
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
    input.value = ''; // input-todo 값 초기화
});

function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    render();
}

function toggleDone(id) {
    todos = todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo));
    render();
}

function render() {
    list.innerHTML = '';
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = todo.done ? 'done' : '';

        const btns = document.createElement('div');
        btns.setAttribute('role', 'group');

        if (todo.editing) {
            // 편집 모드일 때 input 박스 표시
            const input = document.createElement('input');
            input.type = 'text';
            input.value = todo.text;
            input.style.marginRight = '10px';
            input.style.padding = '5px';
            input.style.border = '1px solid #ccc';
            input.style.borderRadius = '3px';
            input.focus();
            input.select();

            const saveBtn = document.createElement('button');
            saveBtn.textContent = '저장';
            saveBtn.onclick = () => saveTodo(todo.id, input.value);

            const cancelBtn = document.createElement('button');
            cancelBtn.textContent = '취소';
            cancelBtn.onclick = () => cancelEdit(todo.id);

            li.appendChild(input);
            btns.appendChild(saveBtn);
            btns.appendChild(cancelBtn);
            li.appendChild(btns);
        } else {
            // 일반 모드일 때 기존 UI 표시
            const span = document.createElement('span');
            span.textContent = todo.text;
            span.style.cursor = 'pointer';
            span.onclick = () => toggleDone(todo.id);

            const delBtn = document.createElement('button');
            delBtn.textContent = '삭제';
            delBtn.onclick = () => deleteTodo(todo.id);

            const updBtn = document.createElement('button');
            updBtn.textContent = '수정';
            updBtn.onclick = () => updateTodo(todo.id);

            btns.appendChild(delBtn);
            btns.appendChild(updBtn);

            li.appendChild(span);
            li.appendChild(btns);
        }

        list.appendChild(li);
    });
}
function updateTodo(id) {
    todos = todos.map((todo) => (todo.id === id ? { ...todo, editing: true } : { ...todo, editing: false }));
    render();
}

function saveTodo(id, newText) {
    const text = newText.trim();
    if (text) {
        todos = todos.map((todo) => (todo.id === id ? { ...todo, text, editing: false } : todo));
        render();
    }
}

function cancelEdit(id) {
    todos = todos.map((todo) => (todo.id === id ? { ...todo, editing: false } : todo));
    render();
}

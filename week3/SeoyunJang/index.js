
//초기 설정 요소
let todos = [];

const form = document.getElementById("todo.form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// local storage 사용
// local storage 에 todos 불러오기
const savedTodos = localStorage.getItem("todos");
if (saveTodos) {
    todos = JSON.parse(savedTodos);
}

// todos 배열을 localStorage에 저장하는 함수
function saveTodos(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

//할 일 추가
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const text = input.value.trim();
    if (text){
        const newTodo = {
            id: Date.now(),
            text,
            done: false,
        };
        todos.push(newTodo);
        input.value = "";
        saveTodos();
        render();
    }
});

//할 일 삭제
function deleteTodo(id){
    todos = todos.filter(t => t.id !== id);
    saveTodos();
    render();
}

// 완료/미완료 상태 바꾸는 toggle 함수
function toggleDone(id){
    todos = todos.map(function(todo){
        if(todo.id === id){
            todo.done = !todo.done;
        }
        return todo;
    });
    saveTodos();
    render();
}

//수정 기능
function updateTodo(id, li){
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    li.innerHTML = "";

    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = todo.text;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "저장";
    saveBtn.onclick = () => {
        if (inputEdit.value.trim()){
            todo.text = inputEdit.value.trim();
            saveTodos();
            render();
        }
    };

    li.appendChild(inputEdit);
    li.appendChild(saveBtn);
}

//렌더링 (화면 그리기)
function render(){
    list.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;

        const span = document.createElement("span");
        span.textContent = todo.text;

        if (todo.done) {
            span.style.textDecoration = "line-through";
            span.style.color = "gray";
        }
        span.style.cursor = "pointer";
        span.onclick = () => toggleDone(todo.id);

        const editBtn = document.createElement("button");
        editBtn.textContent = "수정";
        editBtn.className = "edit";
        editBtn.onclick = () => updateTodo(todo.id, li);

        const delBtn = document.createElement("button");
        delBtn.textContent = "삭제";
        delBtn.classList = "delete";
        delBtn.onclick = () => deleteTodo(todo.id);

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

render();
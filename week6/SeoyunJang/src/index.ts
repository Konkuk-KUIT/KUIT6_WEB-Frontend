interface Todo {
  id : number;
  text : string;
  done : boolean;
}

let todos : Todo[] = [];

const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

const savedTodos = localStorage.getItem("todos");
if (savedTodos){
  todos = JSON.parse(savedTodos) as Todo[];
}

function saveTodos(){
  localStorage.setItem("todos", JSON.stringify(todos));
}

function render() : void {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = todo.id.toString();

    const span = document.createElement("span");
    span.textContent = todo.text;

    if (todo.done) {
      span.classList.add("done");
    }

    span.onclick = () => toggleDone(todo.id);

    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.classList.add("edit");
    editBtn.onclick = () => updateTodo(todo.id, li);

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.classList.add("delete");
    delBtn.onclick = () => deleteTodo(todo.id);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

render();

form.addEventListener("submit", (e : SubmitEvent) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text){
    const newTodo : Todo = {
      id : Date.now(),
      text,
      done:false
    };
    todos.push(newTodo);
    input.value = "";
    saveTodos();
    render();
  }
});

function deleteTodo(id : number) : void {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  render();
}

function toggleDone(id : number) : void {
  todos = todos.map((todo) => {
    if (todo.id === id){
      todo.done = !todo.done;
    }
    return todo;
  });
  saveTodos();
  render();
}

function updateTodo(id : number, li : HTMLLIElement) : void {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  li.innerHTML = "";

  const inputEdit = document.createElement("input");
  inputEdit.type = "text";
  inputEdit.value = todo.text;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "저장";
  saveBtn.onclick = () => {
    if(inputEdit.value.trim()) {
      todo.text = inputEdit.value.trim();
      saveTodos();
      render();
    }
  };
  li.appendChild(inputEdit);
  li.appendChild(saveBtn);
}
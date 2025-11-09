interface Todo {
    id: number;
    text: string;
    done: boolean;
}

let todos: Todo[] = [];

const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

//local storage에서 list 불러오기
function loadList(): Todo[] {
    const tempList = window.localStorage.getItem("todolistSaved");
    return tempList ? JSON.parse(tempList) as Todo[] : [];
}

//todo list 저장
function saveList(): void {
  if (todos) {
    window.localStorage.setItem("todolistSaved", JSON.stringify(todos));
  }
}

todos = loadList();
render();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input?.value.trim();
  if (text) {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    todos.push(newTodo);
    saveList();
    render();
  }
  input.value = "";
});

//todo 삭제
function deleteTodo(id: number): void {
  const targetId = todos.findIndex(t => t.id === id);
  if (targetId === -1) return;
  todos.splice(targetId, 1);
  saveList();
  render();
}

//todo 완/미완
function toggleDone(id: number): void {
  const target = todos.find(t => t.id === id);
  if (target === undefined) return;
  target.done = !target.done;
  saveList();
  render();
}

function render(): void {
  list.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.onclick = () => toggleDone(todo.id);

    const btnContainer = document.createElement("div");
    
    const delBtn = document.createElement("button");
    delBtn.setAttribute("class", "del");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => deleteTodo(todo.id);

    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit");
    editBtn.textContent = "수정";
    editBtn.onclick = () => updateTodo(li, todo.id);

    li.appendChild(span);
    btnContainer.appendChild(delBtn);
    btnContainer.appendChild(editBtn);
    li.appendChild(btnContainer);
    list.appendChild(li);
  });
}

//todo 수정
function updateTodo(container: HTMLLIElement, id: number): void {
  const element = todos.find(t => t.id === id);
  if (element === undefined) return;
  
  container.innerHTML = "";
  
  const editInput = document.createElement("input");
  editInput.id = "todo-edit";
  editInput.type = "text";
  editInput.value = element.text;

  const editBtn = document.createElement("button");
  editBtn.className = "edit";
  editBtn.textContent = "수정";

  editBtn.addEventListener("click", () => {
    const text = editInput?.value.trim();
    if (text) {
      element.text = text;
      saveList();
      render();
    };
  });

  container.appendChild(editInput);
  container.appendChild(editBtn);
}

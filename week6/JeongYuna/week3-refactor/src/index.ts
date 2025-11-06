interface Todo {
  id: number,
  text: string,
  done: boolean,
}

enum TodoElement {
  FORM = "todo-form",
  INPUT = "todo-input",
  LIST = "todo-list",
  INDEX = "todo-index"
}

interface ITodoManager {
  todos: Todo[],

  loadTodos: () => void,
  saveTodos: () => void,
  deleteTodo: (id: number) => void,
  updateTodo: (id: number, li: HTMLElement) => void,
  toggleDone: (id: number) => void
}

class TodoManager implements ITodoManager {
  todos: Todo[] = [];
  finishedTodoIdx = 0;  // idx: 변수명이 의미를 잘 담지 못함

  loadTodos(): void {
    let lst = window.localStorage.getItem(TodoElement.LIST);
    let lastIdx = window.localStorage.getItem(TodoElement.INDEX);

    if (lst) this.todos = JSON.parse(lst);
    this.finishedTodoIdx = lastIdx ? parseInt(lastIdx) : 0;
  }

  saveTodos(): void {
    if (this.finishedTodoIdx < 0) this.finishedTodoIdx = 0;
    window.localStorage.setItem(TodoElement.INDEX, this.finishedTodoIdx.toString());
    window.localStorage.setItem(TodoElement.LIST, JSON.stringify(this.todos));
  }

  deleteTodo(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return; // 못 찾으면 그대로 둠
    let todo = this.todos[index];
    if (!todo) return;

    if (!todo.done) {
      this.decreaseIdx(1);  // 완료되지 않은 요소의 마지막 인덱스 감소
      this.printIdx();
    }

    this.todos = this.todos.filter((t) => t.id !== id);

    this.saveTodos();
    render();
  }

  toggleDone(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return; // 못 찾으면 그대로 둠

    let todo = this.todos[index];
    if (!todo) return;

    const isDone = todo.done;
    todo.done = !isDone;

    if (todo.done) {
      this.todos.splice(index, 1); // 위치에서 빼기
      this.todos.push(todo);
      this.decreaseIdx(1);
      this.printIdx();
    } else {
      this.todos.splice(index, 1);
      this.todos.splice(this.finishedTodoIdx, 0, todo);
      this.increaseIdx(1);
      this.printIdx();
    }
    this.saveTodos();
    render();
  }

  updateTodo(id: number, li: HTMLElement): void {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) return;

    const txt = todo.text;

    const inp = document.createElement("input");
    inp.value = txt;

    let newTxt = "";

    const span = li.querySelector("span");
    if (!span) return;
    li.replaceChild(inp, span);

    const btns = li.querySelector("div");
    if (!btns) return;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "저장";
    saveBtn.classList.add("save");

    const quitBtn = document.createElement("button");
    quitBtn.textContent = "취소";
    quitBtn.classList.add("delete");

    const div = document.createElement("div");
    div.appendChild(saveBtn);
    div.appendChild(quitBtn);

    li.replaceChild(div, btns);

    let save = () => {
      newTxt = inp.value.trim();
      todo.text = newTxt || txt;
      this.saveTodos();
      render();
    }

    inp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") save();
    });

    saveBtn.onclick = save;
    quitBtn.onclick = render;
  }

  increaseIdx(i: number): void {
    this.finishedTodoIdx += i;
  }

  decreaseIdx(i: number): void {
    this.finishedTodoIdx -= i;
  }

  printIdx(): void {
    console.log(this.finishedTodoIdx);
  }
}

const form = document.getElementById(TodoElement.FORM) as HTMLFormElement | null;
const input = document.getElementById(TodoElement.INPUT) as HTMLInputElement | null;
const list = document.getElementById(TodoElement.LIST) as HTMLUListElement | null;

const todoManager = new TodoManager();

function render() {
  if (!list) return;
  list.innerHTML = "";
  todoManager.todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.style.cursor = "pointer";
    span.classList.add("todo");
    span.onclick = () => todoManager.toggleDone(todo.id);

    const updateBtn: HTMLButtonElement = document.createElement("button");
    updateBtn.classList.add("update");
    updateBtn.textContent = "수정";
    updateBtn.onclick = () => todoManager.updateTodo(todo.id, li);

    const delBtn: HTMLButtonElement = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.textContent = "삭제";
    delBtn.onclick = () => todoManager.deleteTodo(todo.id);

    const btns = document.createElement("div");
    btns.appendChild(updateBtn);
    btns.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(btns);
    list.appendChild(li);
  });
}

if (!form || !input || !list) { console.error("html 요소 없음") }
else
{
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    if (!input) return;
    const text = input.value.trim();
    if (text) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        done: false,
      };
      todoManager.todos.splice(todoManager.finishedTodoIdx, 0, newTodo);
      todoManager.increaseIdx(1);
      todoManager.saveTodos();
      render();
      input.value = "";
    }
  });

  todoManager.loadTodos();
  render();
}
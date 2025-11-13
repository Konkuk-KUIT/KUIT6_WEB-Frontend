// Todo 항목 타입 정의
interface Todo {
  id: number;
  text: string;
  done: boolean;
}

// Todo 타입 요소들로 이루어진 배열
let todos: Todo[] = [];

// 타입 단언, getElementById의 null 가능성 제거
const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;

form.addEventListener("submit", (e: SubmitEvent) => {
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

// targetId 타입 지정 및 반환 값이 없는 void 지정
function deleteTodo(targetId: number): void {
  todos = todos.filter((todo) => todo.id !== targetId);
  render();
}

function toggleDone(targetId: number): void {
  todos = todos.map((todo) => {
    if (todo.id === targetId) {
      return {
        ...todo,
        done: !todo.done,
      };
    }
    return todo; // Id가 같지 않다면 원래대로 반환
  });
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

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "del";
    delBtn.onclick = () => deleteTodo(todo.id);

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "수정";
    updateBtn.className = "update";
    updateBtn.onclick = () => updateTodo(todo.id, li);

    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.appendChild(delBtn);
    btnGroup.appendChild(updateBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);
    list.appendChild(li);
  });
}

// 파라미터 타입 지정 및 void 함수 타입 지정
function updateTodo(targetId: number, targetLi: HTMLLIElement): void {
  // 수정 버튼 클릭시
  // 각 li 요소에 input 태그와 버튼 등장
  // id, done은 바뀌면 안 됨
  // 버튼 누르면 input 태그 사라짐, todo가 수정 완료

  const todo = todos.find((todo) => todo.id === targetId);
  if (!todo) return;

  // targetLi 비우기
  targetLi.innerHTML = "";

  const input = document.createElement("input");
  input.type = "text";
  input.value = todo.text;

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "완료";
  saveBtn.className = "save";

  const saveHandler = () => {
    const newText = input.value.trim();
    if (newText) {
      todos = todos.map((todo) =>
        todo.id === targetId ? { ...todo, text: newText } : todo
      );
      render();
    }
  };

  saveBtn.onclick = saveHandler;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      saveHandler();
    }
  });

  targetLi.appendChild(input);
  targetLi.appendChild(saveBtn);
}

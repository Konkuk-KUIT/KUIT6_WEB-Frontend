document.addEventListener("DOMContentLoaded", () => {
  interface Todo {
    id: number;
    text: string;
    done: boolean;
  }

  let todos: Todo[] = [];

  const form = document.getElementById("todo-form") as HTMLFormElement;
  const input = document.getElementById("todo-input") as HTMLInputElement;
  const list = document.getElementById("todo-list") as HTMLUListElement;

  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        done: false,
      };
      todos.push(newTodo);
      input.value = "";
      render();
    }
  });

  function deleteTodo(id: number): void {
    todos = todos.filter((t) => t.id !== id);
    render();
  }

  function toggleDone(id: number | string): void {
    const targetId = typeof id === "string" ? Number(id) : id;
    todos = todos.map((t) =>
      t.id === targetId ? { ...t, done: !t.done } : t
    );
    render();
  }

  function render(): void {
    list.innerHTML = "";

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.dataset.id = String(todo.id);
      li.classList.toggle("done", todo.done);

      const span = document.createElement("span");
      span.textContent = todo.text;
      span.style.cursor = "pointer";
      span.onclick = () => toggleDone(todo.id);

      const actions = document.createElement("div");
      actions.className = "actions";

      const delBtn = document.createElement("button");
      delBtn.textContent = "삭제";
      delBtn.className = "btn-delete";
      delBtn.onclick = (e: MouseEvent) => {
        e.stopPropagation();
        deleteTodo(todo.id);
      };

      const upBtn = document.createElement("button");
      upBtn.textContent = "수정";
      upBtn.className = "btn-edit";
      upBtn.onclick = (e: MouseEvent) => {
        e.stopPropagation();
        updateTodo(todo.id);
      };

      actions.appendChild(delBtn);
      actions.appendChild(upBtn);

      li.appendChild(span);
      li.appendChild(actions);
      list.appendChild(li);
    });
  }

  function updateTodo(id: number): void {
    const li = list.querySelector(`li[data-id="${id}"]`) as HTMLLIElement | null;
    const todo = todos.find((t) => t.id === id);
    if (!li || !todo) return;

    li.setAttribute("data-editing", "true");
    li.classList.remove("done");
    li.innerHTML = "";

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = todo.text;
    editInput.style.flex = "1";
    editInput.style.padding = "8px";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "완료";
    saveBtn.className = "btn-edit";
    saveBtn.onclick = () => {
      const newText = editInput.value.trim();
      if (!newText) {
        alert("내용을 입력하세요.");
        editInput.focus();
        return;
      }
      todos = todos.map((t) =>
        t.id === id ? { ...t, text: newText } : t
      );
      render();
    };

    li.style.display = "flex";
    li.style.gap = "8px";
    li.appendChild(editInput);
    li.appendChild(saveBtn);
    editInput.focus();
  }
});

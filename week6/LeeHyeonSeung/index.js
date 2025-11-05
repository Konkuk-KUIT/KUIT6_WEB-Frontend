var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todos = [];
var form = document.getElementById("todo-form");
var input = document.getElementById("todo-input");
var list = document.getElementById("todo-list");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!input)
        return;
    var text = input.value.trim();
    if (text) {
        var newTodo = {
            id: Date.now(),
            text: text,
            done: false,
        };
        todos.push(newTodo);
        render();
    }
});
function deleteTodo(id) {
    todos = todos.filter(function (todo) { return todo.id !== id; });
    render();
}
function toggleDone(id) {
    todos = todos.map(function (todo) {
        if (todo.id === id) {
            return __assign(__assign({}, todo), { done: !todo.done });
        }
        return todo;
    });
    render();
}
function render() {
    if (!list)
        return;
    list.innerHTML = "";
    todos.forEach(function (todo) {
        var li = document.createElement("li");
        li.className = todo.done ? "done" : "";
        var span = document.createElement("span");
        span.textContent = todo.text;
        span.style.cursor = "pointer";
        span.onclick = function () { return toggleDone(todo.id); };
        var delBtn = document.createElement("button");
        delBtn.textContent = "삭제";
        delBtn.className = "delete";
        delBtn.onclick = function () { return deleteTodo(todo.id); };
        var editBtn = document.createElement("button");
        editBtn.textContent = "수정";
        editBtn.className = "edit";
        editBtn.onclick = function () { return updateTodo(todo.id); };
        var btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";
        btnGroup.appendChild(delBtn);
        btnGroup.appendChild(editBtn);
        li.appendChild(span);
        li.appendChild(btnGroup);
        list.appendChild(li);
    });
}
function updateTodo(id) {
    if (!list)
        return;
    var todo = todos.find(function (t) { return t.id === id; });
    if (!todo)
        return;
    var li = Array.from(list.children).find(function (el) {
        var span = el.querySelector("span");
        var input = el.querySelector("input");
        return ((span && span.textContent === todo.text) ||
            (input && input.value === todo.text));
    });
    if (!li)
        return;
    var span = li.querySelector("span");
    var delBtn = li.querySelector(".delete");
    var editBtn = li.querySelector(".edit");
    var input = document.createElement("input");
    input.type = "text";
    input.value = todo.text;
    if (span)
        li.replaceChild(input, span);
    if (delBtn)
        delBtn.style.display = "none";
    // 저장하기
    if (editBtn) {
        editBtn.onclick = function () {
            var newText = input.value.trim();
            if (newText)
                todo.text = newText;
            render();
        };
    }
}

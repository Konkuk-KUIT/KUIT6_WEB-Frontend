import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import './App.css'

type Todo = {
  id: number
  text: string
  done: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingValue, setEditingValue] = useState('')
  const editInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (editingId !== null && editInputRef.current) {
      editInputRef.current.focus()
      editInputRef.current.select()
    }
  }, [editingId])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = inputValue.trim()
    if (trimmed.length === 0) {
      return
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: trimmed,
      done: false,
    }
    setTodos((prev) => [...prev, newTodo])
    setInputValue('')
  }

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setEditingValue('')
    }
  }

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo,
      ),
    )
  }

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id)
    setEditingValue(todo.text)
  }

  const commitEditing = () => {
    if (editingId === null) {
      return
    }
    const trimmed = editingValue.trim()
    if (trimmed.length === 0) {
      setEditingId(null)
      setEditingValue('')
      return
    }
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingId
          ? {
              ...todo,
              text: trimmed,
            }
          : todo,
      ),
    )
    setEditingId(null)
    setEditingValue('')
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditingValue('')
  }

  const handleEditingKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      commitEditing()
    }
    if (event.key === 'Escape') {
      event.preventDefault()
      cancelEditing()
    }
  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form id="todo-form" onSubmit={handleSubmit}>
        <input
          id="todo-input"
          type="text"
          placeholder="할 일을 입력하세요"
          required
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">추가</button>
      </form>
      <ul id="todo-list">
        {todos.map((todo) => {
          const isEditing = editingId === todo.id
          return (
            <li key={todo.id} className={todo.done ? 'done' : undefined}>
              {isEditing ? (
                <input
                  ref={editInputRef}
                  type="text"
                  value={editingValue}
                  onChange={(event) => setEditingValue(event.target.value)}
                  onKeyDown={handleEditingKeyDown}
                  onBlur={commitEditing}
                />
              ) : (
                <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
              )}
              <div className="button-container">
                <button type="button" onClick={() => handleDelete(todo.id)}>
                  삭제
                </button>
                <button
                  type="button"
                  onClick={() => (isEditing ? commitEditing() : startEditing(todo))}
                >
                  {isEditing ? '저장' : '수정'}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App

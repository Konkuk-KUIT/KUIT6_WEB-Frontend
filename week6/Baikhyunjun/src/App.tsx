import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'
import { type Todo } from './types/todo'

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
      <TodoForm
        inputValue={inputValue}
        onInputChange={(value) => setInputValue(value)}
        onSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        editingId={editingId}
        editingValue={editingValue}
        editInputRef={editInputRef}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onStartEditing={startEditing}
        onEditingValueChange={(value) => setEditingValue(value)}
        onCommitEditing={commitEditing}
        onEditingKeyDown={handleEditingKeyDown}
      />
    </div>
  )
}

export default App

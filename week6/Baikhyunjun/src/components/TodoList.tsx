import { KeyboardEvent, MutableRefObject } from 'react'
import { type Todo } from '../types/todo'
import { TodoItem } from './TodoItem'

type TodoListProps = {
  todos: Todo[]
  editingId: number | null
  editingValue: string
  editInputRef: MutableRefObject<HTMLInputElement | null>
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onStartEditing: (todo: Todo) => void
  onEditingValueChange: (value: string) => void
  onCommitEditing: () => void
  onEditingKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
}

export function TodoList({
  todos,
  editingId,
  editingValue,
  editInputRef,
  onToggle,
  onDelete,
  onStartEditing,
  onEditingValueChange,
  onCommitEditing,
  onEditingKeyDown,
}: TodoListProps) {
  return (
    <ul id="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editingId === todo.id}
          editingValue={editingValue}
          editInputRef={editInputRef}
          onToggle={onToggle}
          onDelete={onDelete}
          onStartEditing={onStartEditing}
          onEditingValueChange={onEditingValueChange}
          onCommitEditing={onCommitEditing}
          onEditingKeyDown={onEditingKeyDown}
        />
      ))}
    </ul>
  )
}


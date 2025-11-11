import { ChangeEvent, KeyboardEvent, MutableRefObject } from 'react'
import { type Todo } from '../types/todo'

type TodoItemProps = {
  todo: Todo
  isEditing: boolean
  editingValue: string
  editInputRef: MutableRefObject<HTMLInputElement | null>
  onToggle: (id: number) => void
  onDelete: (id: number) => void
  onStartEditing: (todo: Todo) => void
  onEditingValueChange: (value: string) => void
  onCommitEditing: () => void
  onEditingKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void
}

export function TodoItem({
  todo,
  isEditing,
  editingValue,
  editInputRef,
  onToggle,
  onDelete,
  onStartEditing,
  onEditingValueChange,
  onCommitEditing,
  onEditingKeyDown,
}: TodoItemProps) {
  const handleEditingChange = (event: ChangeEvent<HTMLInputElement>) => {
    onEditingValueChange(event.target.value)
  }

  return (
    <li className={todo.done ? 'done' : undefined}>
      {isEditing ? (
        <input
          ref={editInputRef}
          type="text"
          value={editingValue}
          onChange={handleEditingChange}
          onKeyDown={onEditingKeyDown}
          onBlur={onCommitEditing}
        />
      ) : (
        <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      )}
      <div className="button-container">
        <button type="button" onClick={() => onDelete(todo.id)}>
          삭제
        </button>
        <button
          type="button"
          onClick={() => (isEditing ? onCommitEditing() : onStartEditing(todo))}
          onMouseDown={(event) => event.preventDefault()}
        >
          {isEditing ? '저장' : '수정'}
        </button>
      </div>
    </li>
  )
}


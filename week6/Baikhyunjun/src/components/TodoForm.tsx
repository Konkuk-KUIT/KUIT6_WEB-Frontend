import { ChangeEvent, FormEvent } from 'react'

type TodoFormProps = {
  inputValue: string
  onInputChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function TodoForm({ inputValue, onInputChange, onSubmit }: TodoFormProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange(event.target.value)
  }

  return (
    <form id="todo-form" onSubmit={onSubmit}>
      <input
        id="todo-input"
        type="text"
        placeholder="할 일을 입력하세요"
        required
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">추가</button>
    </form>
  )
}


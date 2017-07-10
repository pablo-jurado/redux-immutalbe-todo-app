import React from 'react'

export function Todo (todo) {
  if (todo.isDone) return <srtike>{todo.text}</srtike>
  return <span>{todo.text}</span>
}

export function TodoList (todos) {
  return (
    <div className='todo'>
      <input type='text' placeholder='Add todo' />
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.id} className='todo__item'>
            {Todo(t)}
          </li>
        ))}
      </ul>
    </div>
  )
}

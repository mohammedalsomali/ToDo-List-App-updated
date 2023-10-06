import React from 'react'

export default function Todos( { todo }) {
  return (
    <div key={todo.id}>
        {todo.title}
    </div>
  )
}

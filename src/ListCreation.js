import React from 'react'
import Todos from './Todos'
export default function ListCreation({ todos }) {
  return (
    
    todos.map(todo => {
      return <Todos todo={todo.name} />
    })    
    
  )
}

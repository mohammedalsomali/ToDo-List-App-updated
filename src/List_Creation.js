import React from 'react'
import Todos from './Todos'
export default function List_Creation({ todos }) {
  return (
    
    todos.map(todo => {
      return <Todos Key={todo.id} todo={todo.name} />
    })    
    
  )
}

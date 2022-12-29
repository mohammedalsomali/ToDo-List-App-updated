import List_Creation from "./List_Creation";
import { useEffect, useRef, useState } from "react";


function App() {
  const currentinput = useRef()
  const [Todo , SetTodos] = useState([ {id: 123, name: "first todo"}])

  const AddTodos = () => {
    if(currentinput.current.value != ''){
      const name = currentinput.current.value
      SetTodos(oldtodo => {
        return [...oldtodo, { id: 456, name: name}]})
    }
      
    currentinput.current.value = null
    
   
    
  }

  

 

  return (
    <>
      
      <input ref={currentinput} type="text" id="todo" />
      <input type="submit"  value="Submit" onClick={AddTodos}/>
      <List_Creation todos={Todo} />
      
    </>
    
    
    
  );
}


export default App;



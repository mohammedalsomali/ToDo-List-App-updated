import ListCreation from "./ListCreation";
import { useEffect, useRef, useState } from "react";

function App() {
  //const currentinput = useRef([]);
  const [currentValue, SetValue] = useState([]);
  const [Todo, SetTodos] = useState([]);

  function UpdateTodo(e) {
    e.preventDefault()


    
      SetTodos(currentTodos => {
        return [...currentTodos, { id: crypto.randomUUID(), title: currentValue }]
      })
    
  }

  console.log(["todo ", Todo], ["val ", currentValue]);
  return (
    <>
      <form onSubmit={UpdateTodo}>
        <input
          type="text"
          value={currentValue}
          onChange={(e) => SetValue(e.target.value)}
          
        />
        <button className="Addbtn" type="submit" />
      </form>

      <ListCreation todos={Todo} />
    </>
  );
}

export default App;

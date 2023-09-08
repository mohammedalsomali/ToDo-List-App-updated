import ListCreation from "./ListCreation";
import React from "react";
import { useEffect, useRef, useState } from "react";

function App() {
  //const currentinput = useRef([]);
  const [currentValue, SetValue] = useState({ 
    input1 : "lk",
    input2 : "lkj"
  });
  const [Todo, SetTodos] = useState({
    val : "llklkl",
    value: "lklkm"
  });

  function UpdateTodo(e) {
    e.preventDefault()


    
      // SetTodos(currentTodos => {
      //   return [...currentTodos, { id: crypto.randomUUID(), val: currentValue.input1, value: currentValue.input2 }]
      // })

    
    
  }

  console.log(["todo ", Todo], ["val ", currentValue]);
  return (
    <>
      <form onSubmit={UpdateTodo}>
        <input
          type="text"
          value={currentValue.input1}
          onChange={(e) => SetValue({...Todo, val: e.target.value})}
        />
        <input 
        type="text"
        value={currentValue.input2}
        onChange={(e) => SetValue({...Todo, value: e.target.value})}
        />
        <button className="Addbtn" type="submit" />
      </form>

      <ListCreation todos={Todo} />
    </>
  );
}

export default App;

import ListCreation from "./ListCreation";
import { useEffect, useRef, useState } from "react";

function App() {
  //const currentinput = useRef([]);
  const [Todo, SetTodos] = useState([]);
  function AddTodos(currnetValue) {
    currnetValue.preventDefault();
    useEffect(() => {
    SetTodos(() => Todo)
  }, [])

}


  return (
    <>
      <form>
        <input
          type="text"
          placeholder = {Todo}
          onSubmit={AddTodos()}
          onChange={(e) => SetTodos(e.target.value)}
          
        />
        <button className="Addbtn" type="submit" />
      </form>

      <ListCreation todos={Todo} />
    </>
  );
}

export default App;

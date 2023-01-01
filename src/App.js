import List_Creation from "./List_Creation";
import { useEffect, useRef, useState } from "react";


function App() {
  const currentinput = useRef()
  const [Todo , SetTodos] = useState(['nigga'])

  

  

 

  return (
    <>
      
      <button className="Addbtn" />
      <List_Creation todos={Todo} />
      
    </>
    
    
    
  );
}


export default App;



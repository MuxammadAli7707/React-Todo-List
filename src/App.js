import { useState } from 'react';
import './App.css';
import Todo from './Components/ToDo/Todo';

function App() {

  let [text, setText] = useState("");
  let [arr, setArr] = useState([]);

  return (
    <>
    <Todo
      text={text} 
      setText={setText}
      arr={arr}
      setArr={setArr}
    />
    </>
  );
}

export default App;

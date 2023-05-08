import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTodos,removeTodo} from "./slice/todoSlice"

function App() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const handleAdd =() =>{
    dispatch(addTodos(input));
    setInput("");

  }

  const  handleDelet=(index)=>{
    dispatch(removeTodo(index))

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do</h1>
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="input"
            type="text"
            placeholder="Todo"
          />
          <button  onClick={handleAdd} className="button" type="submit">
            ADD
          </button>
       </div>
        {todos &&
          todos.map((item, index) => {
            return (
              <div key={index}>
                <ul className="allTods">
                  <li className="singleTodo">
                    <span className="todoText">{item}</span>
                    <button onClick={()=> handleDelet(index)}  className="button">REMOVE</button>
                  </li>
                </ul>
              </div>
            );
          })}
      </header>
    </div>
  );
}

export default App;

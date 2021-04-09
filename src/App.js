
import React from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { useState } from 'react';
import './App.css';


import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

function App() {
  const [todoInput, setTodoInput] = useState("");
  function addTodo(e){
    e.preventDefault();
      console.log("AADING");
  }

  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1>AUROBINDO GUPTA</h1>
      <h4>TODO LIST APP</h4>
      <form>
      <TextField id="standard-basic" label="ENTER TASK." variant="outlined" 
      value={todoInput} 
      onChange={(e)=>{setTodoInput(e.target.value)
      }} 
      style={{width:"35%"}}/>
      <IconButton type="submit" aria-label="add" size="medium" color="primary" onClick={addTodo}> 
        <AddCircleOutlinedIcon/>
      </IconButton>
      </form>
    </div>
  );
}

export default App;


import React, { useEffect } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { useState } from 'react';
import './App.css';


import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { db } from './firebase_configuration';
import firebase from 'firebase';



function App(){ 
  const [todos, setTodos] = useState([])
  const [todoInput, setTodoInput] = useState("");
 useEffect(() => {
   getTodos();
   
 }, []) //only running on first launch
 
 
 function getTodos(){
   db.collection("todos").onSnapshot(function(querySnapshot){
     setTodos(
      querySnapshot.docs.map((doc)=>({
        id:doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
      }))
     );//when ever new data updated it wil reflect real time db
 })
  function addTodo(e){
    e.preventDefault();
    db.collection("todoS").add({
      inprogress: true,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
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
      {todos.map((todo)=>(
        <p>{todo.todo}</p>
      ))}
    </div>
  );
}

export default App;

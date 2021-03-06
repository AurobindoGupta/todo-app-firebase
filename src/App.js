
import React, { useEffect } from 'react';
import { IconButton, TextField } from '@material-ui/core';
import { useState } from 'react';
import './App.css';


import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { db } from './firebase_configuration';
import firebase from 'firebase';
import TodoListItem from './Todo';
import { FormatAlignJustify } from '@material-ui/icons';



function App(){ 
  const [Btodos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
 useEffect(() => {
   getTodos();
   
 }, []) ;//only running on first launch

 
 function getTodos(){
   db.collection("todoS").onSnapshot(function(querySnapshot){
     setTodos(
      querySnapshot.docs.map((doc)=>({
        timeStamp: doc.data().timeStamp,
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
      }))
     );//when ever new data updated it wil reflect real time db
 });
}

  function addTodo(e){
    e.preventDefault();
    var evalue= todoInput;
        if(evalue){
          
          db.collection("todoS").add({
            inprogress: true,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: todoInput,
          });
        
          setTodoInput("");
          
          console.log("has  value");
        }
        else{
          alert("OI.. ENTER TASK😈");
          console.log("has no value");
        }
    
    
  
  
}


  return (
    <div className="App" >
      <div style={{display:"flex",flexDirection:"column",
      textAlign:"center",alignItems:"center"}} >
      <h1>AUROBINDO GUPTA</h1>
      <h4>TODO LIST APP</h4>
      
      <form>
      <TextField id="standard-basic" label="ENTER TASK." variant="outlined" 
      value={todoInput} 
      onChange={(e)=>{setTodoInput(e.target.value);
        
      }} 
      style={{padding:"0% 0%"}}/>
      <IconButton type="submit" aria-label="add" size="medium" color="primary" onClick={addTodo}> 
        <AddCircleOutlinedIcon/>
      </IconButton>
      </form>
      

      { Btodos.map ((todo) => (
       <TodoListItem  
        
       id ={todo.id}
       
       todo={todo.todo}
       inprogress={todo.inprogress}
       /> 
      ))}
      
    </div>
    </div>
  );
}

export default App;

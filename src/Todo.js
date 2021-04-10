import { ListItem, ListItemText, Button } from '@material-ui/core';
import React from 'react';
import { IconButton, TextField } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import RedoIcon from '@material-ui/icons/Redo';
import { db } from './firebase_configuration';

export default function TodoListItem({id, inprogress, todo}) {
            function toggleInProgress(){
                db.collection("todoS").doc(id).update({
                    inprogress: !inprogress,
                    
                })
                
            }
 
function deleteTodo(){
    db.collection("todoS").doc(id).delete();
}

    return (
        <div style={{display:"flex",width:"40%",
        }} >
           <ListItem style={{justifyContent:"center"}}>
           <ListItemText primary={todo} secondary={inprogress? "In-Progress":"Completed"} style={{color:inprogress?"green":"red"}}/>
            </ListItem>
         <Button onClick={toggleInProgress}>
            {inprogress ? "Done" : "UnDone"}
         </Button>
            <IconButton type="submit" aria-label="add" size="medium" color="secondary" onClick={deleteTodo}> 
                <CancelIcon/>
                </IconButton>
      </div>
        
    )
}

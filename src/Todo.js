import { ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { IconButton, TextField } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

export default function TodoListItem({id, inprogress, todo}) {
    return (
        <div style={{display:"flex"}} >
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress? "In-Progress":"Completed"}/>

                
            </ListItem>
            <IconButton type="submit" aria-label="add" size="medium" color="primary" > 
        <CheckCircleIcon/>
      </IconButton>
      <IconButton type="submit" aria-label="add" size="medium" color="secondary" > 
        <CancelIcon/>
      </IconButton>
        </div>
    )
}

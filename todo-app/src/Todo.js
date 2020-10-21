import React from 'react'
import { List, ListItem , ListItemText } from '@material-ui/core';
function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.text}> </ListItemText>
            </ListItem>
            <li>{props.name}</li>
        </List>
    )
}

export default Todo

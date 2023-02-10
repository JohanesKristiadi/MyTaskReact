import React from "react";
import Button from "./Button"

const TodoItem = () =>{
    return(
        <div style={todoItem}>
            <p>Title Todo</p>
            <div>
                <Button text="edit" variant = "success"/>
                <Button text="delete" variant= "warning"/>
            </div>
        </div>
    )
}

export default TodoItem;

const todoItem = {
    background :"#6096B4",
    color : "#ffff",
    display : "flex",
    alignItems : "center",
    height : "3rem",
    padding : "0 1rem",
    justifyContent : "space-between",
    margin : "0.5rem 0"
}
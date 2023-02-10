import React from "react";
import Button from "./Button"
import propTypes from "prop-types"

const TodoItem = props =>{
    return(
        <div style={todoItem}>
            <p>{props.todo.title}</p>
            <div>
                <Button text="edit" variant = "success"/>
                <Button text="delete" variant= "warning"/>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo : propTypes.object.isRequired
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
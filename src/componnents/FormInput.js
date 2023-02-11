import React from "react";
import Button from "./Button";
import "../styles/FormInput.css";

class FormInput extends React.Component {
    state={
        text:""
    }
    change= e=>{
        this.setState({text :e.target.value})
    }
    sumbit = e =>{
        e.preventDefault();
        if(this.state.text !== ""){
            this.props.add(this.state.text)
        }
        this.setState({
            text:""
        })
    }
    render() {
        return (
            <form style={inputForm} onSubmit={this.sumbit}>
                <input 
                type="text"
                value={this.state.text}
                onChange={this.change}
                style={input} 
                placeholder="Add Task" 
                />
                <Button text="add" variant="primary" action={this.sumbit}/>
            </form>
        );
    }
}

export default FormInput;

const inputForm = {
    background: "#ffff",
    color: "#ffff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0",
};

const input = {
    width: "70%",
    border: "none",
};

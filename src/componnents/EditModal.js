import React from "react";
import Button from "./Button";
import "../styles/EditModal.css"

class EditModal extends React.Component{
    render(){
        return(
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Edit Task</h3>
                    <div className="input">
                        <input type='text'></input>
                    </div>
                    <div className="btn-group">
                        <Button text="edit" variant="success"/>
                        <Button text="edit" variant="warning"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditModal;
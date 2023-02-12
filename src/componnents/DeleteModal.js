import React from "react";
import "../styles/DeleteModal.css";
import Button from "./Button";

class DeleteModal extends React.Component {
    render() {
        
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Apakah Anda Ingin menghapus data??</h3>
                    <Button text="Iya" variant="success" />
                    <Button text="Tidak Jadi" variant="warning"/>
                </div>
            </div>
        );
    }
}

export default DeleteModal;
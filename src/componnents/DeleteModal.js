import React from "react";
import "../styles/DeleteModal.css";
import Button from "./Button";

function DeleteModal(props) {
    if (props.delete) {
        return (
            <div className="modal-container">
                <div className="modal-box">
                    <h3>Apakah Anda Ingin menghapus data??</h3>
                    <Button text="Iya" variant="success" action={() => props.del(props.todo.id)} />
                    <Button text="Tidak Jadi" variant="warning" action={props.close} />
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default DeleteModal;
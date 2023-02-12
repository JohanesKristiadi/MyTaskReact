import React from "react";
import "../styles/DeleteModal.css";
import Button from "./Button";

class DeleteModal extends React.Component {
    render() {
        if (this.props.delete) {
            return (
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Apakah Anda Ingin menghapus data??</h3>
                        <Button text="Iya" variant="success" action={this.del}/>
                        <Button text="Tidak Jadi" variant="warning" action={this.props.close}/>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default DeleteModal;
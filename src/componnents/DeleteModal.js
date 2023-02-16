import '../styles/DeleteModal.css';

import React from 'react';

import Button from './Button';

class DeleteModal extends React.Component {
    render() {
        if (this.props.delete) {
            return (
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Apakah Anda Ingin menghapus data??</h3>
                        {/* this.del itu dapat dari mana? di sini actionnya harusnya menjalankan fungsi yang akan dijalankan utk delete */}
                        {/* kalau this.del itu berarti harusnya ada fungsi del di sini, tapi di sini tidak ada fungsi del */}
                        {/* kalau del nya itu dikirim dari tempat lain, berarti dia menjadi props ya */}
                        {/* jangan lupa, fungsi delnya di sini butuh menerima sesuatu loh! coba dibaca komen lainnya */}
                        {/* catatan: kalau fungsi butuh parameter, bisa dipanggil begini kan: hapus(1), 
                            tapi kalau dipanggil begitu, nanti dia akan langsung jalan. gimana cara panggil dengan parameter, 
                            tapi tetap berupa fungsi sehingga dia menunggu untuk diklik dulu? */}
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
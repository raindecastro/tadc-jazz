import React from 'react';
import Modal from 'react-modal';
import sue1 from '../../dist/img/sue1.png';

const SueModal = (props) => (
        <Modal
        isOpen={props.isOpen}
        contentLabel="Selected Option"
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
        >
            <div className="modal__container">
                <h1 className="modal__title">Ms. Sue</h1>
                <img className="image1" src={sue1} />
                <p className="welcome__message">Ms Sue is currently a movement professor and coach for The Assumption Dance Company (Jazz) in Assumption College, Makati. She graduated from Ateneo de Davao University and finished Bachelor of Arts Major in Communcation Arts.</p>
                <button className="modal__button" onClick={() => {
                    props.showMenuIcon()   
                    props.closeModal()
                }}>exit</button>
            </div>
        </Modal>
);

export default SueModal;
import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel='Selected Option'
        closeTimeoutMS={200}
        className='modal'
        onRequestClose={props.closeModal}
    >
        <h4 className='modal__title'>There’s nothing wrong with thinking through options before making a decision.</h4>
        <p>Remember, if things don’t work out how you hope, you can always try something else!</p>
        {props.selectedOption && <h2 className='modal__body'>{props.selectedOption}</h2>}
        <button className='button' onClick={props.closeModal}>Okay</button>

    </Modal>
);

export default OptionModal;
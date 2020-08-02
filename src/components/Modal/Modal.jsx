import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './Modal.css';

const animationTiming = {
    enter: 400,
    exit: 700
};

const Modal = (props) => (
    <CSSTransition
        in={props.show}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
        classNames={{
            enterActive: 'ModalOpen',
            exitActive: 'ModalClosed'
        }}
    >
        <div className="Modal">
            <h1>A Modal</h1>
            <button
                className="Button"
                onClick={props.closed}
            >Dismiss</button>
        </div>
    </CSSTransition>
);


export default Modal;
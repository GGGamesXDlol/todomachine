import React from 'react';
import ReactDOM from 'react-dom';

function Modal(props)
{
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {props.children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };
import React, { FC } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
    children: React.ReactNode
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        border: 'none',
    },

    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
};

const Modal: FC<ModalProps> = ({ children }) => {
    return (
        <ReactModal style={customStyles} isOpen>
            {children}
        </ReactModal>
    );
};

export default Modal;

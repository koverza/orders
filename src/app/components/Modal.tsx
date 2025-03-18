import React, { useEffect } from 'react';
import Modal from 'react-modal';
import styles from '../page.module.scss';

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabel: string;
    children: React.ReactNode;
}

const CustomModal = ({ isOpen, onRequestClose, contentLabel, children }: ModalProps) => {
    useEffect(() => {
        Modal.setAppElement('#__next');
    }, []);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;

import React from 'react';
import styles from '../page.module.scss';

interface AuthButtonsProps {
    openModal: (tab: string) => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ openModal }) => {
    return (
        <>
            <button onClick={() => openModal('login')} className={styles.home__button}>
                Login
            </button>
            <button onClick={() => openModal('registration')} className={styles.home__button}>
                Registration
            </button>
        </>
    );
};

export default AuthButtons;

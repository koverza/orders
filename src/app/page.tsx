'use client';
import Link from 'next/link';
import styles from './page.module.scss';
import { useState } from 'react';
import CustomModal from './components/Modal';

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.home__inner}>
                    <Link href='/login' className={styles.home__button}>
                        Login
                    </Link>
                    <Link href='/registration' className={styles.home__button}>
                        Registration
                    </Link>
                    <Link href='/orders' className={styles.home__button}>
                        Orders
                    </Link>
                </div>
            </div>

            <button onClick={openModal} className={styles.button}>
                Open Modal
            </button>
            <CustomModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Example Modal'
            >
                <h2>Hello</h2>
                <button onClick={closeModal} className={styles.button}>
                    Close Modal
                </button>
            </CustomModal>
        </section>
    );
}

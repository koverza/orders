import React from 'react';
import CustomModal from './Modal';
import CustomInput from './CustomInput';
import CustomLink from './CustomLink';
import styles from '../page.module.scss';
import { links } from '../models/links';
import Link from 'next/link';

interface AuthModalProps {
    modalIsOpen: boolean;
    closeModal: () => void;
    activeTab: string;
    handleTabClick: (tab: string) => void;
    loginData: { email: string; password: string };
    registrationData: { email: string; password: string; confirmPassword: string };
    handleLoginChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRegistrationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleLogin: () => void;
    handleRegistration: () => void;
    isChecked: boolean;
    setIsChecked: (checked: boolean) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({
    modalIsOpen,
    closeModal,
    activeTab,
    handleTabClick,
    loginData,
    registrationData,
    handleLoginChange,
    handleRegistrationChange,
    handleLogin,
    handleRegistration,
    isChecked,
    setIsChecked
}) => {
    return (
        <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel='Modal'>
            <div className={styles.home__tabsBlock}>
                <div className={styles.home__tabs}>
                    <button
                        className={`${styles.home__tab} ${activeTab === 'login' ? styles.active : ''}`}
                        onClick={() => handleTabClick('login')}
                    >
                        Login
                    </button>
                    <button
                        className={`${styles.home__tab} ${activeTab === 'registration' ? styles.active : ''}`}
                        onClick={() => handleTabClick('registration')}
                    >
                        Registration
                    </button>
                </div>
                <button className={styles.home__tabButton} onClick={closeModal}>
                    <img src='/cross.svg' alt='icon' />
                </button>
            </div>
            <div className={styles.home__tabsContent}>
                {activeTab === 'login' ? (
                    <>
                        <CustomInput
                            type='text'
                            name='email'
                            value={loginData.email}
                            onChange={handleLoginChange}
                            placeholder='Email or Mobile'
                        />
                        <CustomInput
                            type='password'
                            name='password'
                            value={loginData.password}
                            onChange={handleLoginChange}
                            placeholder='Password'
                        />
                        <button className={styles.home__modalButton} onClick={handleLogin}>
                            Login
                        </button>
                        <div className={styles.home__media}>
                            <p className={styles.home__mediaText}>Use social networks</p>
                            <div className={styles.home__mediaRow}>
                                {links.map(link => (
                                    <CustomLink key={link.src} href='#' src={link.src} />
                                ))}
                            </div>
                        </div>
                        <Link href='#' className={styles.forgot}>
                            <p>Forgot password?</p>
                        </Link>
                    </>
                ) : (
                    <>
                        <CustomInput
                            type='text'
                            name='email'
                            value={registrationData.email}
                            onChange={handleRegistrationChange}
                            placeholder='Email or Mobile'
                        />
                        <CustomInput
                            type='password'
                            name='password'
                            value={registrationData.password}
                            onChange={handleRegistrationChange}
                            placeholder='Password'
                        />
                        <CustomInput
                            type='password'
                            name='confirmPassword'
                            value={registrationData.confirmPassword}
                            onChange={handleRegistrationChange}
                            placeholder='Confirm Password'
                        />
                        <div className={styles.home__checkboxBlock}>
                            <input
                                type='checkbox'
                                id='terms'
                                className={styles.home__checkbox}
                                checked={isChecked}
                                onChange={e => setIsChecked(e.target.checked)}
                            />
                            <label htmlFor='terms' className={styles.home__checkboxLabel}>
                                <span className={styles.home__checkboxText}>
                                    Use social networks
                                </span>
                            </label>
                        </div>
                        <button className={styles.home__modalButton} onClick={handleRegistration}>
                            Registration
                        </button>
                        <div className={styles.home__media}>
                            <p className={styles.home__mediaText}>Use social networks</p>
                            <div className={styles.home__mediaRow}>
                                {links.map(link => (
                                    <CustomLink key={link.src} href='#' src={link.src} />
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </CustomModal>
    );
};

export default AuthModal;

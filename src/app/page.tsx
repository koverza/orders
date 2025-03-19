'use client';
import styles from './page.module.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthButtons from './components/AuthButtons';
import UserGreeting from './components/UserGreeting';
import OrdersLink from './components/OrderLink';
import AuthModal from './components/AuthModal';

export default function Home() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('login');
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registrationData, setRegistrationData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('');

    useEffect(() => {
        const savedEmail = localStorage.getItem('loggedInUser');
        if (savedEmail) {
            setLoggedInUser(savedEmail);
        }
    }, []);

    useEffect(() => {
        const savedEmail = sessionStorage.getItem('loggedInUser');
        if (savedEmail) {
            setIsLoggedIn(true);
            setLoggedInUser(savedEmail);
        }
    }, []);

    const openModal = (tab: string) => {
        setActiveTab(tab);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleRegistrationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegistrationData({ ...registrationData, [name]: value });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('/.netlify/functions/login', loginData);
            if (response.data.message === 'Login successful') {
                toast.success('Login successful');
                setIsLoggedIn(true);
                setLoggedInUser(loginData.email);
                sessionStorage.setItem('loggedInUser', loginData.email);
                closeModal();
            } else {
                toast.error('Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Error logging in');
        }
    };

    const handleRegistration = async () => {
        try {
            const response = await axios.post('/.netlify/functions/register', {
                email: registrationData.email,
                password: registrationData.password
            });
            if (response.data.message === 'User registered successfully') {
                toast.success(`Registration successful. Welcome, ${registrationData.email}!`);
                setLoggedInUser(registrationData.email);
                sessionStorage.setItem('loggedInUser', registrationData.email);
                closeModal();
                setActiveTab('login');
                setModalIsOpen(true);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error registering:', error);
            toast.error('Error registering');
        }
    };

    const handleOrdersClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (!isLoggedIn) {
            e.preventDefault();
            toast.error('You must be logged in to view orders.');
        }
    };

    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.home__inner}>
                    {!isLoggedIn && <AuthButtons openModal={openModal} />}
                    {isLoggedIn && <UserGreeting loggedInUser={loggedInUser} />}
                    <OrdersLink handleOrdersClick={handleOrdersClick} />
                </div>
            </div>

            <AuthModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                loginData={loginData}
                registrationData={registrationData}
                handleLoginChange={handleLoginChange}
                handleRegistrationChange={handleRegistrationChange}
                handleLogin={handleLogin}
                handleRegistration={handleRegistration}
            />
            <ToastContainer />
        </section>
    );
}

'use client';
import styles from './page.module.scss';
import { useState, useEffect } from 'react';
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
    const [isChecked, setIsChecked] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState('');

    // Load logged-in user from localStorage if exists
    useEffect(() => {
        const savedEmail = localStorage.getItem('loggedInUser');
        if (savedEmail) {
            setLoggedInUser(savedEmail);
        }
    }, []);

    // Load logged-in state from sessionStorage if exists
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

    const handleLogin = () => {
        if (!loginData.email || !loginData.password) {
            toast.error('Please enter email and password');
            return;
        }
        // Check for registered user stored in localStorage
        const storedUser = localStorage.getItem('registeredUser');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.email === loginData.email && user.password === loginData.password) {
                toast.success('Login successful');
                setIsLoggedIn(true);
                setLoggedInUser(loginData.email);
                sessionStorage.setItem('loggedInUser', loginData.email);
                closeModal();
            } else {
                toast.error('Invalid email or password');
            }
        } else {
            toast.error('No registered user found. Please register.');
        }
    };

    const handleRegistration = () => {
        // Validate that all fields are filled
        if (
            !registrationData.email ||
            !registrationData.password ||
            !registrationData.confirmPassword
        ) {
            toast.error('Please fill in all fields');
            return;
        }
        // Check that passwords match
        if (registrationData.password !== registrationData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        // Check if the checkbox is checked
        if (!isChecked) {
            toast.error('You must agree to the terms');
            return;
        }
        // Simulate successful registration by saving user data in localStorage
        const user = {
            email: registrationData.email,
            password: registrationData.password
        };
        localStorage.setItem('registeredUser', JSON.stringify(user));
        toast.success(`Registration successful. Welcome, ${registrationData.email}!`);
        setLoggedInUser(registrationData.email);
        sessionStorage.setItem('loggedInUser', registrationData.email);
        closeModal();
        setActiveTab('login');
        setModalIsOpen(true);
        // Reset registration fields and checkbox
        setRegistrationData({ email: '', password: '', confirmPassword: '' });
        setIsChecked(false);
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
                isChecked={isChecked}
                setIsChecked={setIsChecked}
            />
            <ToastContainer />
        </section>
    );
}

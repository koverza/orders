import React from 'react';
import styles from '../page.module.scss';

interface UserGreetingProps {
    loggedInUser: string;
}

const UserGreeting: React.FC<UserGreetingProps> = ({ loggedInUser }) => {
    return <p className={styles.home__user}>Welcome, {loggedInUser}!</p>;
};

export default UserGreeting;

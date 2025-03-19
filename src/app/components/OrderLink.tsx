import React from 'react';
import Link from 'next/link';
import styles from '../page.module.scss';

interface OrdersLinkProps {
    handleOrdersClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const OrdersLink: React.FC<OrdersLinkProps> = ({ handleOrdersClick }) => {
    return (
        <Link href='/orders' className={styles.home__button} onClick={handleOrdersClick}>
            Orders
        </Link>
    );
};

export default OrdersLink;

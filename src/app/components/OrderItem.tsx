'use client';
import Link from 'next/link';
import styles from '../orders/page.module.scss';

interface OrderItemProps {
    transactionId: string;
    date: string;
    status: string;
    gameName: string;
    gameId: string;
    amount: string;
}

const OrderItem = ({ transactionId, date, status, gameName, gameId, amount }: OrderItemProps) => {
    return (
        <Link href={`/orders/${transactionId}`} className={styles.orders__link}>
            <div className={styles.order__item}>
                <div className={styles.order__top}>
                    <div className={styles.order__box}>
                        <span className={styles.order__description}>Transaction ID</span>
                        <span className={styles.order__text}>{transactionId}</span>
                    </div>
                    <div className={styles.order__box}>
                        <span className={styles.order__description}>Date</span>
                        <span className={styles.order__text}>{date}</span>
                    </div>
                    <div className={styles.order__box}>
                        <span className={styles.order__description}>Status</span>
                        <div className={styles.order__block}>
                            <div className={styles.order__circle}></div>
                            <span className={styles.order__text}>{status}</span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.order__bottom}>
                    <div className={styles.order__box}>
                        <span className={styles.order__description}>Game Name</span>
                        <span className={styles.order__text}>{gameName}</span>
                    </div>
                    <div className={styles.order__box}>
                        <span className={styles.order__description}>Game ID</span>
                        <span className={styles.order__text}>{gameId}</span>
                    </div>
                    <div className={styles.order__box}>
                        <span className={styles.order__description}>Amount</span>
                        <span className={styles.order__text}>{amount}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default OrderItem;

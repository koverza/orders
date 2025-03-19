'use client';
import { useParams } from 'next/navigation';
import styles from '../page.module.scss';
import { orders } from '../../models/orders';
import OrderItem from '@/app/components/OrderItem';
import BackBlock from '@/app/components/BackBlock';
import NotFound from '@/app/not-found';

export default function OrderDetails() {
    const { transactionId } = useParams();
    const order = orders.find(order => order.transactionId === transactionId);

    if (!order) {
        return <NotFound />;
    }

    return (
        <section className={styles.orders}>
            <div className={styles.orders__inner}>
                <BackBlock href='/orders' name={order.transactionId} src={'/cross.svg'} />
                <div className={styles.orders__content}>
                    <OrderItem
                        transactionId={order.transactionId}
                        date={order.date}
                        status={order.status}
                        gameName={order.gameName}
                        gameId={order.gameId}
                        amount={order.amount}
                    />
                    <div className={styles.orders__information}>
                        <div className={styles.orders__informationBox}>
                            <div className={styles.orders__names}>
                                <p className={styles.orders__name}>Your Goods:</p>
                                <p className={styles.orders__name}>
                                    <span>1 - 279,99$</span>
                                </p>
                            </div>
                            <div className={styles.orders__numbers}>
                                <div className={styles.orders__row}>
                                    <span className={styles.orders__number}>40,500</span>
                                    <p className={styles.orders__bonus}>+1,500</p>
                                </div>
                                <div className={styles.orders__row}>
                                    <span className={styles.orders__number}>279,99$</span>
                                    <p className={styles.orders__old}>749.99$</p>
                                </div>
                            </div>
                            <a href='#' className={styles.orders__informationButton}>
                                Ask?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

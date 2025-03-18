'use client';
import { useParams } from 'next/navigation';
import styles from '../page.module.scss';
import { orders } from '../../models/mock';
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
                <BackBlock name={order.transactionId} src={'/cross.svg'} />
                <div className={styles.orders__content}>
                    <OrderItem
                        transactionId={order.transactionId}
                        date={order.date}
                        status={order.status}
                        gameName={order.gameName}
                        gameId={order.gameId}
                        amount={order.amount}
                    />
                </div>
                <div className='orders__information'>
                    <div className='orders__names'>
                        <div className='orders__name'>Your Goods:</div>
                        <div className='orders__name'>1 - 279,99$</div>
                    </div>
                    <div className='orders__numbers'>
                        <div className='orders__row'>
                            <span className='orders__number'>40,500</span>
                            <p className='orders__bonus'>+1,500</p>
                        </div>
                        <div className='orders__row'>
                            <span className='orders__number'>279,99$</span>
                            <p className='orders__old'>749.99$</p>
                        </div>
                    </div>
                    <a href='#' className='orders__button'>
                        Ask?
                    </a>
                </div>
            </div>
        </section>
    );
}

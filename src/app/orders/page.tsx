import styles from './page.module.scss';
import OrderItem from '../components/OrderItem';
import { orders } from '../models/orders';
import BackBlock from '../components/BackBlock';

export default function Orders() {
    return (
        <section className={styles.orders}>
            <div className={styles.orders__inner}>
                <BackBlock href='/' name={'Orders'} src={'/arrow.svg'} />
                <div className={styles.orders__content}>
                    {orders.map((order, index) => (
                        <OrderItem
                            key={index}
                            transactionId={order.transactionId}
                            date={order.date}
                            status={order.status}
                            gameName={order.gameName}
                            gameId={order.gameId}
                            amount={order.amount}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

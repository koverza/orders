import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
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
        </section>
    );
}

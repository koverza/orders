import Link from 'next/link';
import styles from '../orders/page.module.scss';

interface OrderHeaderProps {
    name: string;
    src: string;
    href: string;
}

const BackBlock = ({ name, src, href }: OrderHeaderProps) => {
    return (
        <div className={styles.orders__top}>
            <Link href={href} className={styles.orders__button}>
                <img src={src} alt='icon' />
            </Link>
            <span className={styles.orders__title}>{name}</span>
        </div>
    );
};

export default BackBlock;

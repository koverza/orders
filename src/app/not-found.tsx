import styles from './page.module.scss';

export default function NotFound() {
    return (
        <section className={styles.notFound}>
            <div className={styles.notFound__inner}>
                <h1 className={styles.notFound__title}>404</h1>
            </div>
        </section>
    );
}

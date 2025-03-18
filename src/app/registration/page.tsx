import Link from 'next/link';
import './page.module.scss';

export default function Registration() {
    return (
        <section className='registration'>
            <div className='container'>
                <Link href='/' className='registration__button'>
                    home
                </Link>
            </div>
        </section>
    );
}

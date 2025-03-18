import Link from 'next/link';
import './page.module.scss';

export default function Login() {
    return (
        <section className='login'>
            <div className='container'>
                <Link href='/' className='login__button'>
                    home
                </Link>
            </div>
        </section>
    );
}

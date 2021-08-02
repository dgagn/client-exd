import type { AppProps } from 'next/app';
import '../styles/main.scss'
import NProgress from 'nprogress'
import Router from 'next/router'
import Image from 'next/image';
import LogoCEFIR from '../public/LogoCEFIR.png';
import Link from 'next/link';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return <>
        <div className='container max-w-adaptive-xl mt-xl'>
            <nav className='nav'>
                <Image src={LogoCEFIR} />
                <ul className='nav__list'>
                    <li>
                        <Link href={'/'}>Accueil</Link>
                    </li>
                    <li>Méthodologie</li>
                    <Link href={'/bd'}>Base de données</Link>
                </ul>
            </nav>
        </div>
        <Component {...pageProps} />
    </>;
}

export default MyApp;

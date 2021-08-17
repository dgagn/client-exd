import type { AppProps } from 'next/app';
import '../styles/main.scss';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import BackTop from "../components/back-top";

const Nav = dynamic(() => import('../components/nav'));

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>CEFIR - Accueil</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
                />
            </Head>
            <Nav />
            <Component {...pageProps} />
            <BackTop />
        </>
    );
}

export default MyApp;

import type { AppProps } from 'next/app';
import '../styles/main.scss';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import BackTop from '../components/back-top';
import useColors from '../hooks/use-colors';
import { useEffect } from "react";

const Nav = dynamic(() => import('../components/nav'));

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    useColors();

    const isWebPSupported = (): boolean => {
        const canvas = document.createElement('canvas');
        return canvas.getContext && canvas.getContext('2d')
            ? canvas.toDataURL('image/webp').indexOf('data:image/webp') == 0
            : false;
    };

    useEffect(() => {
        const webpSupport = isWebPSupported();
        !webpSupport && document.body.classList.add('no-webp')
    }, [])

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

import type { AppProps } from 'next/app';
import '../styles/main.scss'
import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head';
import Nav from '../components/nav';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { useState } from 'react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return <QueryClientProvider client={queryClient}>
        <Head>
            <title>CEFIR - Accueil</title>
        </Head>
        <Hydrate state={pageProps.dehydratedState}>
            <Nav />
            <Component {...pageProps} />
            <div className='infinite' />
        </Hydrate>
    </QueryClientProvider>;
}

export default MyApp;

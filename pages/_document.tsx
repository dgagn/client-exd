import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

const APP_NAME = 'CEFIR ExD BD'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='fr' dir='ltr'>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Base de données sur l'éxtrème droite du CEFIR."/>

                    <meta name='application-name' content={APP_NAME} />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta name='theme-color' content='#FFFFFF' />
                    {/* TIP: set viewport head meta tag in _app.js, otherwise it will show a warning */}
                    {/* <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> */}

                    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <link rel="manifest" href="/manifest.json" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
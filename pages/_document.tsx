import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

const APP_NAME = 'CEFIR ExD BD';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="fr" dir="ltr">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="description"
                        content="Base de données sur l'éxtrème droite du CEFIR."
                    />
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
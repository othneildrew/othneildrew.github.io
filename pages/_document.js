
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        /**
         * This fixes NextJS and react-jss integration issues.
         * NextJS uses _app to initialize pages, but doesn't get the whole App component,
         * only the page component. So only the stylesheets of the current page
         * be caught by the SheetsRegistry causing an issues where styles are not
         * being loaded. This fix also allows pages to still be statically generated,
         * a benefit of using NextJS altogether.
         *
         * Credit: https://medium.com/wesionary-team/implementing-react-jss-on-next-js-projects-7ceaee985cad
         */
        const registry = new SheetsRegistry()
        const generateId = createGenerateId()
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () => (
            originalRenderPage({
                enhanceApp: (App) => (props) => (
                    <JssProvider registry={registry} generateId={generateId}>
                        <App {...props} />
                    </JssProvider>
                )
            })
        )

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style id='server-side-styles'>{registry.toString()}</style>
                </>
            )
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/*Meta*/}
                    <meta charSet='utf-8' />

                    {/*Fonts*/}
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <link href='https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=IBM+Plex+Sans+Condensed&family=Roboto:wght@400;500&display=swap' rel='stylesheet' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
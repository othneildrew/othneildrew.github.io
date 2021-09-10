
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        /**
         * RESOLUTION ORDER
         * https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_document.js
         * On the server:
         * 1. app.getInitialProps
         * 2. page.getInitialProps
         * 3. document.getInitialProps
         * 4. app.render
         * 5. page.render
         * 6. document.render
         *
         *
         * On the server with error:
         * 1. document.getInitialProps
         * 2. app.render
         * 3. page.render
         * 4. document.render
         *
         *
         * On the client:
         * 1. app.getInitialProps
         * 2. page.getInitialProps
         * 3. app.render
         * 4. page.render
         *
         */

        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets()
        const originRenderPage = ctx.renderPage

        ctx.renderPage = () => {
            return originRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
            })
        }

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finishes.
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/*Meta*/}
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
                    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

                    {/*Fonts*/}
                    <link rel='preconnect' href='https://fonts.googleapis.com' />
                    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                    <link href='https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=IBM+Plex+Sans+Condensed&family=Roboto:wght@400;500&display=swap' rel='stylesheet' />

                    {/*Icons*/}
                    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png?v=2' />
                    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png?v=2' />
                    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png?v=2' />
                    <link rel='manifest' href='/site.webmanifest?v=2' />
                    <link rel='mask-icon' href='/safari-pinned-tab.svg?v=2' color='#b65296' />
                    <link rel='shortcut icon' href='/favicon.ico?v=2' />
                    <meta name='msapplication-TileColor' content='#ffffff' />
                    <meta name='theme-color' content='#ffffff' />
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
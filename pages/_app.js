
import '../styles/global.scss'
import theme from '../config/theme'
import Head from 'next/head'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import DefaultLayout from '../components/layouts/DefaultLayout'
import React from 'react'


// TODO: setup app so flash of incorrect theme isn't happening anymore and only dark bg is shown
export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <DefaultLayout>
                <Head>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
                    <title>Othneil Drew - Full Stack Developer (Houston, TX | Seeking Remote)</title>
                </Head>
                <Component {...pageProps} />
            </DefaultLayout>
        </ThemeProvider>
    )
}
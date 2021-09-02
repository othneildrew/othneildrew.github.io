
import '../styles/global.scss'
import theme from '../config/theme'
import { createUseStyles, ThemeProvider, useTheme } from 'react-jss'
import DefaultLayout from '../components/layouts/DefaultLayout'



export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </ThemeProvider>
    )
}
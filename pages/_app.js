
import '../styles/global.scss'
import theme from '../config/theme'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import DefaultLayout from '../components/layouts/DefaultLayout'


// TODO: setup app so flash of incorrect theme isn't happening anymore and only dark bg is shown
export default function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </ThemeProvider>
    )
}
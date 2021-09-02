
import Head from 'next/head'
import Header from '../core/Header'
import Footer from '../core/Footer'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    main: {
        // border: '1px solid red',
        minHeight: '100vh',
    },
})

const DefaultLayout = ({ children }) => {
    const classes = useStyles()

    return (
        <>
            <Header/>
            <main className={classes.main}>{children}</main>
            <Footer/>
        </>
    )
}

export default DefaultLayout
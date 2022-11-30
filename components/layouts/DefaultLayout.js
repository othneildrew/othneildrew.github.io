
import { useState } from 'react'
import Header from '../core/Header'
import Footer from '../core/Footer'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    main: {
        minHeight: '100vh',
    },
})

const DefaultLayout = ({ children }) => {
    const classes = useStyles()
    const [mainNavExpanded, setMainNavExpanded] = useState(false)

    const handleNavToggle = () => {
        setMainNavExpanded((prevState) => ! prevState)
    }

    return (
        <div style={{overflowX: 'clip'}}>
            <Header
                navOpen={mainNavExpanded}
                navToggleHandler={handleNavToggle}
            />
            <main className={classes.main}>{children}</main>
            <Footer />
        </div>
    )
}

export default DefaultLayout
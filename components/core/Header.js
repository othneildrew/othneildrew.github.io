
import Link from 'next/link'
import { createUseStyles, useTheme } from 'react-jss'
import { CodeIcon } from './CustomSvgs'
import MenuIcon from './MenuIcon'
import useMediaQuery from '../../utils/hooks/useMediaQuery'

const useStyles = createUseStyles((theme) => ({
    root: {
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        padding: '15px 20px',
        width: '100%',
        // backgroundColor: 'pink',
        // opacity: 0.4,

        [theme.breakpoints.up('md')]: {
            padding: 30,
            // backgroundColor: 'red',
        },

        [theme.breakpoints.up('lg')]: {
            padding: '30px 60px',
            // backgroundColor: 'red',
        },
    },
    innerWrapper: {
        // backgroundColor: 'orange',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        width: '100%',
        height: 'auto',
        // backgroundColor: 'green',

    },
    logoLink: {
        transition: '0.2s all',
        '&:hover': {
            opacity: 0.7,
        },
    },
    nav: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',

        // display: 'none',
    },
    navLink: {
        padding: '0 8px',
        color: 'rgba(255, 255, 255, 0.7)',
        textDecoration: 'none',
    },
}))


const Header = ({navOpen, navToggleHandler}) => {
    const classes = useStyles()
    const theme = useTheme()
    const mqSmBreakpoint = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <header className={classes.root}>
            <div className={classes.innerWrapper}>
                <Link href='/'>
                    <a className={classes.logoLink}>
                        <CodeIcon size={60} />
                    </a>
                </Link>

                {!mqSmBreakpoint &&
                <nav className={classes.nav}>
                    <a href='#' className={classes.navLink}>Latest Work</a>
                    <a href='#' className={classes.navLink}>Skills</a>
                    <a href='#' className={classes.navLink}>Testimonials</a>
                    <a href='#' className={classes.navLink}>Projects</a>
                </nav>}

                <div style={{display:'flex',alignItems:'center'}}>
                    <Link href='/resume'>
                        <a className='btn btn--outlined btn--primary'>Resume</a>
                    </Link>

                    {mqSmBreakpoint && <MenuIcon open={navOpen} navToggleHandler={navToggleHandler} />}
                </div>
            </div>
        </header>
    )
}

export default Header
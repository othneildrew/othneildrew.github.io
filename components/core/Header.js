
import Link from 'next/link'
import { createUseStyles } from 'react-jss'
import { CodeIcon } from './CustomSvgs'
import MenuIcon from './MenuIcon'


const useStyles = createUseStyles((theme) => ({
    root: {
        zIndex: 20000,
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
    nav: {
        display: 'none',
    },
    menu: {

    },
}))

const Header = () => {
    const classes = useStyles()

    return (
        <header className={classes.root}>
            <div className={classes.innerWrapper}>
                <Link href='/'>
                    <a>
                        <CodeIcon size={60} />
                    </a>
                </Link>

                <nav className={classes.nav}>
                    <a>Latest Work</a>
                    <a>Skills</a>
                    <a>Testimonials</a>
                    <a>Projects</a>
                </nav>

                <div style={{display:'flex',alignItems:'center'}}>
                    <Link href='/resume'>
                        <a className='btn btn--outlined btn--primary'>Resume</a>
                    </Link>

                    <MenuIcon open={false} />
                </div>
            </div>
        </header>
    )
}

export default Header
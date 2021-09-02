
import Link from 'next/link'
import { createUseStyles } from 'react-jss'
import { CodeIcon } from './CustomSvgs'


const useStyles = createUseStyles({
    root: {
        zIndex: 20000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        padding: '30px 60px',
        width: '100%',
        // backgroundColor: 'pink',
        // opacity: 0.4,
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
})

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

                <nav>
                    <a>Latest Work</a>
                    <a>Skills</a>
                    <a>Testimonials</a>
                    <a>Projects</a>
                </nav>

                <Link href='/resume'>
                    <a className='btn btn--outlined btn--primary'>Resume</a>
                </Link>
            </div>
        </header>
    )
}

export default Header
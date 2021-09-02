
import Link from 'next/link'
import { createUseStyles } from 'react-jss'
import { CodeIcon } from './CustomIcons'


const useStyles = createUseStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: '100%',
        backgroundColor: 'pink',
        opacity: 0.4,
    },
    innerWrapper: {
        backgroundColor: 'orange',
        display: 'flex',
        justifyContent: 'space-between',
    },
})

const Header = () => {
    const classes = useStyles()

    return (
        <header className={classes.root}>
            <div style={{backgroundColor: 'orange'}}>
                <Link href='/'>
                    <a>
                        <CodeIcon />
                    </a>
                </Link>

                <nav>
                    <a>Latest Work</a>
                    <a>Skills</a>
                    <a>Testimonials</a>
                    <a>Projects</a>
                </nav>
            </div>
        </header>
    )
}

export default Header
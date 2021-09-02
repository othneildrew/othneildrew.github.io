
import Link from 'next/link'
import { createUseStyles, useTheme } from 'react-jss'


const useStyles = createUseStyles({
    root: {
        // flex: 1,
        // backgroundColor: 'brown',
        width: '100%',
        height: '100vh',
    },
    innerWrapper: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // transform: 'translateY(-calc(100vh - 75%))',
        transform: 'translateY(-80px)',
        height: 'inherit',
        // backgroundColor: 'black',

    },
    headline: {
        fontSize: 18,
        opacity: 0.7,
    },
    title: {
        margin: '16px 0 12px',
        fontFamily: 'Black Han Sans; sans-serif',
        fontSize: '4em',
    },
    subtitle: {
        fontFamily: 'Black Han Sans; sans-serif',
        fontSize: '3em',
        // color: ({theme}) => theme.palette.secondary,
        color: '#6fcedc',
    },
    btnContainer: {
        marginTop: 43,
    },
})

const Hero = () => {
    // const theme = useTheme()
    const classes = useStyles()

    return (
        <section className={classes.root}>
            <div className={classes.innerWrapper}>
                <div className='og-container'>
                    <div className='og-row'>
                        <div className='og-col-24 og-col-md-20'>
                            <p className={classes.headline}>Full Stack Developer &nbsp; | &nbsp; UI/UX Pro</p>
                            <h1 className={classes.title}>Othneil Drew</h1>
                            <p className={classes.subtitle}>I create amazing<br /> experiences fro the web.</p>

                            <div className={classes.btnContainer}>
                                <Link href='#'>
                                    <button role='link' className='btn btn--filled btn--primary'>Hire Me</button>
                                </Link>

                                <Link href='/resume'>
                                    <button role='link' className='btn btn--outlined btn--primary'>Resume</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
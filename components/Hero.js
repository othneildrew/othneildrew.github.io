
import Link from 'next/link'
import { createUseStyles, useTheme } from 'react-jss'
import { FloatingMoon } from './core/CustomSvgs';


const useStyles = createUseStyles((theme) => ({
    root: {
        position: 'relative',
        // flex: 1,
        // backgroundColor: 'brown',
        // border: '1px solid yellow',
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
        fontSize: '1.125em',
        opacity: 0.7,
    },
    title: {
        margin: '16px 0 12px',
        fontFamily: 'Black Han Sans; sans-serif',
        fontSize: '3em',

        [theme.breakpoints.up('md')]: {
            fontSize: '4em',
        },
    },
    subtitle: {
        fontFamily: 'Black Han Sans; sans-serif',
        fontSize: '2em',
        color: theme.palette.secondary,
        // color: '#6fcedc',

        [theme.breakpoints.up('md')]: {
            fontSize: '3em',
        },
    },
    btnContainer: {
        marginTop: 43,
    },
}))

const Hero = () => {
    const theme = useTheme()
    const classes = useStyles()


    // alert(JSON.stringify(theme))

    return (
        <section className={classes.root}>
            <div className={classes.innerWrapper}>
                <div className='og-container'>
                    <div className='og-row'>
                        <div className='offset-1 og-col-22 og-col-md-20'>
                            <p className={classes.headline}>Full Stack Developer &nbsp; | &nbsp; UI/UX Pro</p>
                            <h1 className={classes.title}>Othneil Drew</h1>
                            <p className={classes.subtitle}>I create amazing<br /> experiences for the web.</p>

                            <div className={classes.btnContainer}>
                                <Link href='#'>
                                    <button role='link' className='btn btn--filled btn--primary btn--md' style={{marginRight: theme.spacing(4)}}>Hire Me</button>
                                </Link>

                                <Link href='/resume'>
                                    <button role='link' className='btn btn--outlined btn--primary'>Resume</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FloatingMoon style={{
                zIndex: -10,
                position: 'absolute',
                right: '-10%',
                bottom: '-50%',
                border: '1px solid green',
                width: 'auto',
                height: 400
            }} />
        </section>
    )
}

export default Hero
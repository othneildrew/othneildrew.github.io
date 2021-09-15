
import Link from 'next/link'
import {
    makeStyles,
    useTheme,
    Container,
    Grid,
    Typography,
    Button
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'display',
        alignItems: 'stretch',
        position: 'relative',
        // flex: 1,
        // backgroundColor: 'brown',
        // border: '4px solid pink',
        // width: 'auto',
        height: 'auto',
        // height: '100vh',

        // backgroundColor: 'red',

        // overflow: 'hidden visible',

        // overflowX: 'clip',


    },
    innerWrapper: {
        position: 'relative',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        // paddingTop: 200,
        padding: '200px 25px 0',
        // justifyContent: 'center',
        // alignItems: 'center',
        // transform: 'translateY(-calc(100vh - 75%))',
        // transform: 'translateY(-40px)',

        width: '100%',
        height: '100vh',
        // border: '1px dashed green',

        // backgroundColor: 'black',





        [theme.breakpoints.up('md')]: {
            padding: '200px 30px 0'
        },
        [theme.breakpoints.up('lg')]: {
            padding: '200px 60px 0',
        },
    },
    headline: {
        fontSize: '1.125em',
        opacity: 0.7,
    },
    title: {
        margin: '16px 0 12px',
        fontFamily: 'Black Han Sans; sans-serif',
        fontSize: '3em',

        [theme.breakpoints.up('sm')]: {
            fontSize: '3.5em',
        },

        [theme.breakpoints.up('md')]: {
            fontSize: '4em',
        },
    },
    subtitle: {
        fontFamily: 'Black Han Sans; sans-serif',
        fontSize: '2em',
        color: theme.palette.secondary.main,
        // color: '#6fcedc',

        [theme.breakpoints.up('sm')]: {
            fontSize: '2.5em',
        },

        [theme.breakpoints.up('md')]: {
            fontSize: '3em',
        },
    },
    btnContainer: {
        marginTop: 43,
    },
    floatingMoon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -10,
        position: 'absolute',
        top: 500,
        left: 0,
        width: 'auto',
        height: 700,

        '& img': {
            flexShrink: 'none',
            width: 'auto',
            height: '100%',
        },

        [theme.breakpoints.up('sm')]: {
            top: 420,
            right: -500,
            height: 900,
        },

        [theme.breakpoints.up('md')]: {
            height: 1136,
            top: 340,
            right: -650,
        },

        [theme.breakpoints.up('lg')]: {
            top: 300,
        },
    },
}))

const Hero = () => {
    const theme = useTheme()
    const classes = useStyles()


    // alert(JSON.stringify(theme))

    return (
        <section className={classes.root}>
            {/*<div className={classes.innerWrapper}>*/}
            {/*    <div className='og-container'>*/}
            {/*        <div className='og-row'>*/}
            {/*            <div className='offset-1 og-col-22 offset-sm-0 og-col-sm-24 offset-md-2 og-col-md-20 offset-lg-0' style={{border: '1px solid red'}}>*/}
            {/*                <p className={classes.headline}>Full Stack Developer &nbsp; | &nbsp; UI/UX Pro</p>*/}
            {/*                <h1 className={classes.title}>Othneil Drew</h1>*/}
            {/*                <p className={classes.subtitle}>I create amazing<br /> experiences for the web.</p>*/}

            {/*                <div className={classes.btnContainer}>*/}
            {/*                    <Link href='#'>*/}
            {/*                        <button role='link' className='btn btn--filled btn--primary btn--md' style={{marginRight: theme.spacing(4)}}>Hire Me</button>*/}
            {/*                    </Link>*/}

            {/*                    <Link href='/resume'>*/}
            {/*                        <button role='link' className='btn btn--outlined btn--primary'>Resume</button>*/}
            {/*                    </Link>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

                <Container fixed maxWidth='lg' disableGutters className={classes.innerWrapper}>
                    <Grid container>
                        <Grid item xs={12}>
                            <p className={classes.headline}>Full Stack Developer &nbsp; | &nbsp; UI/UX Pro</p>
                            <h1 className={classes.title}>Othneil Drew</h1>
                            <p className={classes.subtitle}>I create amazing<br /> experiences for the web.</p>

                            <div className={classes.btnContainer}>
                                {/*<Link href='#'>*/}
                                {/*    <button role='link' className='btn btn--filled btn--primary btn--md' style={{marginRight: theme.spacing(4)}}>Hire Me</button>*/}
                                {/*</Link>*/}

                                {/*<Link href='/resume'>*/}
                                {/*    <button role='link' className='btn btn--outlined btn--primary'>Resume</button>*/}
                                {/*</Link>*/}

                                <Button variant='contained' size='large' style={{marginRight:theme.spacing(3)}}>
                                    Hire Me
                                </Button>

                                <Button style={{color:'rgba(255,255,255,0.7)',fontWeight:'normal'}}>
                                    Resume
                                </Button>
                            </div>
                        </Grid>
                    </Grid>

                    <div className={classes.floatingMoon}>
                        <img src='/imgs/illustrations/moon.svg' alt='Moon' />
                        {/*    <FloatingMoon width={2000} height='auto' />*/}
                    </div>
                </Container>
            {/*</div>*/}








        </section>
    )
}

export default Hero

import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles, useTheme, Hidden, Button, Grid } from '@material-ui/core'
import MenuIcon from './MenuIcon'
import CustomLink from './CustomLink';

const useStyles = makeStyles((theme) => ({
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
            // backgroundColor: 'green',
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
    logo: {
        width: 60,
        height: 'auto',
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
    const router = useRouter()

    return (
        <header className={classes.root}>
            <div className={classes.innerWrapper}>
                <Link href='/'>
                    <a className={classes.logoLink}>
                        <img className={classes.logo} src='/imgs/icons/logo.svg' alt='Code Icon' />
                    </a>
                </Link>

                <Hidden only='xs'>
                    <nav className={classes.nav}>
                        {/*<a href='#' className={classes.navLink}>{mqMdUpBreakpoint && 'Latest'} Work</a>*/}
                        {/*<a href='#' className={classes.navLink}>Skills</a>*/}
                        {/*<a href='#' className={classes.navLink}>Testimonials</a>*/}
                        {/*<a href='#' className={classes.navLink}>Projects</a>*/}

                        <Grid container spacing={3}>
                            <Grid item>
                                <CustomLink href='#'>
                                    <Hidden smDown>Latest</Hidden> Work
                                </CustomLink>
                            </Grid>

                            <Grid item>
                                <CustomLink href='#'>
                                    Skills
                                </CustomLink>
                            </Grid>

                            <Grid item>
                                <CustomLink href='#'>
                                    Testimonials
                                </CustomLink>
                            </Grid>

                            <Grid item>
                                <CustomLink href='#'>
                                    Projects
                                </CustomLink>
                            </Grid>
                        </Grid>
                    </nav>
                </Hidden>

                <div style={{display:'flex',alignItems:'center'}}>
                    {/*<Link href='/resume'>*/}
                    {/*    <a className='btn btn--outlined btn--primary'>Resume</a>*/}
                    {/*</Link>*/}

                    <Button
                        style={{color:'rgba(255,255,255,0.7)',fontWeight:'normal'}}
                        onClick={() => router.push('/downloads/resumes/OthneilDrewWebDeveloperResume.pdf', null, {
                            target: '_blank',
                        })}
                    >
                        Resume
                    </Button>


                    {/*<Link href='/downloads/resumes/OthneilDrewWebDeveloperResume.pdf'>*/}

                    {/*    <a target='_blank'>Resume Link</a>*/}
                    {/*</Link>*/}

                    <Hidden smUp>
                        <MenuIcon open={navOpen} navToggleHandler={navToggleHandler} />
                    </Hidden>
                </div>
            </div>
        </header>
    )
}

export default Header
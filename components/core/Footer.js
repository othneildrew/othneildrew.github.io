
import Link from 'next/link'
import { makeStyles, Typography } from '@material-ui/core'
import CustomLink from './CustomLink'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        padding: '40px 70px',
        // border: '1px solid green',
        // backgroundColor: '#060A18',
        textAlign: 'center',

        [theme.breakpoints.up('md')]: {
            padding: '40px 0',
        }
    },
    mountainLaunchpad: {
        zIndex: -10,
        position: 'absolute',
        left: '50%',
        bottom: 0,
        transform: 'translateX(-47.5%)',
        width: 'auto',
        height: 500,

        [theme.breakpoints.up('sm')]: {
            height: 400,
            transform: 'translateX(-46.5%)',
        },

        [theme.breakpoints.up('md')]: {
            transform: 'translateX(-50%)',
            height: 530,
        },
    },
}))


const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            <Typography style={{marginBottom:10,fontSize:'0.875em',opacity:0.7}}>
                This site is dedicated to my sister Sharena who passed away in 2005. Her favorite color was purple.
            </Typography>

            <Typography style={{fontSize:'0.875em',opacity:0.4}}>
                Designed & Developed by Othneil Drew. All artwork created by me.&nbsp;

                <CustomLink href='https://github.com/othneildrew/othneildrew.github.io' target='_blank'>
                    <span style={{fontSize:'0.875em'}}>View on Github</span>
                </CustomLink>
            </Typography>

            <Typography style={{marginTop:20,fontSize:'0.875em',opacity:0.4}}>
                <CustomLink href='/archive'>
                    <span style={{fontSize:'0.875em'}}>Previous site versions</span>
                </CustomLink>
            </Typography>

            <img className={classes.mountainLaunchpad} src='/imgs/illustrations/mountain_w_launchpad.svg' alt='Mountain with rocket launchpad' />
        </footer>
    )
}

export default Footer
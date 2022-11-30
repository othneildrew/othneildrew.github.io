
import Link from 'next/link'
import { LinkedInIcon, GithubIcon, MailIcon } from './core/CustomSvgs'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 2000,
        position: 'fixed',
        // left: 60,
        left: 30,
        bottom: 0,
        width: 'auto',
        height: 'auto',
        // border: '1px solid orange',
        textAlign: 'center',

        // [theme.breakpoints.up('md')]: {
            // left: 30,
            // padding: 30,
            // backgroundColor: 'red',
        // },

        [theme.breakpoints.up('lg')]: {
            left: 60,
            // padding: '30px 60px',
            // backgroundColor: 'red',
        },



        '&::after': {
            content: '',
            position: 'absolute',
            width: 2,
            height: 103,
            // backgroundColor: 'red',
        },
    },
    iconWrapper: {
        display: 'grid',
        gridTemplateRows: 'repeat(3, auto)',
        gridGap: 25,
        // flexDirection: 'column',
        // justifyContent: 'center',
        marginBottom: 25,
    },
    line: {
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        width: 2,
        height: 103,
        backgroundColor: '#c4c4c4',

        [theme.breakpoints.up('sm')]: {
            height: 65,
        },
        [theme.breakpoints.up('xl')]: {
            height: 103,
        }
    },
}))

const FixedSocialIcons = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.iconWrapper}>
                <Link href='https://linkedin.com/in/othneildrew' passRef target='_blank'>
                    <a title='Visit LinkedIn Profile'><LinkedInIcon /></a>
                </Link>

                <Link href='https://github.com/othneildrew' passRef target='_blank'>
                    <a title='Visit Github Profile'><GithubIcon color='#c4c4c4' /></a>
                </Link>

                <Link href='/contact' passRef target='_blank'>
                    <a title='Send a Message'><MailIcon /></a>
                </Link>
            </div>

            <div className={classes.line} />
        </div>
    )
}

export default FixedSocialIcons
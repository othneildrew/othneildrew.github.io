
import Link from 'next/link'
import { makeStyles, Link as MuiLink } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    muiLink: {
        position: 'relative',
        display: 'inline-block',
        color: 'rgba(255, 255, 255, 0.7)',
        cursor: 'pointer',
        transition: '0.4s all',
        opacity: 0.7,
        userSelect: 'none',

        [theme.breakpoints.up('lg')]: {
            fontSize: '1.2em',
        },

        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -2,
            left: 0,
            width: '100%',
            height: 2,
            borderRadius: 2,
            backgroundColor: theme.palette.common.white,
            transform: 'scale(0, 1)',
            transition: '0.4s all',
        },
        '&:hover': {
            opacity: 1,

            '&:after': {
                transform: 'scale(1, 1)',
            },
        },
        '&:active': {
            opacity: 0.8,
            transition: '0.1s all',

            '&:after': {
                opacity: 0.8,
                transition: '0.1s all',
            },
        },
    },
}))


const CustomLink = (props) => {
    const classes = useStyles()

    console.log(props.href)


    return (
        <Link {...props} passRef>
            <MuiLink underline='none' className={classes.muiLink}>
                {props.children}
            </MuiLink>
        </Link>
    )
}

export default CustomLink
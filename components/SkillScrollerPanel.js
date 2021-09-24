
import { makeStyles, Container, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        // display: 'inline-block',
        width: 340,
        height: 'auto',
        minHeight: 260,
        borderRight: `1px solid ${theme.palette.primary.main}`,
        borderBottom: `1px solid ${theme.palette.primary.main}`,

        '&:first-child': {
            borderLeft: `1px solid ${theme.palette.primary.main}`,
        },

    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        backgroundColor: theme.palette.common.white,
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 700,
    },
    body: {
        padding: 20,
    },
}))


const SkillScrollerPanel = ({title, children}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Typography className={classes.title}>{title}</Typography>
            </div>
            <div className={classes.body}>{children}</div>
        </div>
    )
}

export default SkillScrollerPanel
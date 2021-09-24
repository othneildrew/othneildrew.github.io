
import { makeStyles, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(1.5),
        display: 'inline-block',
        padding: '5px 16px',
        borderRadius: 8,
        backgroundColor: '#ebebeb',
        color: '#6f6f6f',
        cursor: 'default',

        '&:not(:last-child)': {
            marginRight: theme.spacing(2),
        }
    },
}))

const WorkTag = ({title}) => {
    const classes = useStyles()

    return (
        <Typography variant='body2' component='span' className={classes.root}>{title}</Typography>
    )
}

export default WorkTag
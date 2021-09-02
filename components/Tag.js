
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    root: {
        display: 'inline-block',
        padding: '5px 16px',
        borderRadius: 8,
        backgroundColor: '#ebebeb',
        color: '#6f6f6f',
    },
})

const Tag = ({title}) => {
    const classes = useStyles()

    return (
        <span className={classes.root}>{title}</span>
    )
}
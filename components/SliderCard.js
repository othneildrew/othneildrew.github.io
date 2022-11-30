
import { useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        // display: 'inline-block',
        padding: 33,
        width: '100%',
        minHeight: 172,
        height: 'auto',
        backgroundColor: '#0D0020',
        // boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.4)',
        borderRadius: 4,
    },
    quote: {
        marginBottom: 5,
        opacity: 0.4,
    },
    source: {
        opacity: 0.9,
    },

})


const SliderCard = ({quote,author}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography className={classes.quote}>{quote}</Typography>
            <Typography className={classes.source} component='span'>{author}</Typography>
        </div>
    )
}

export default SliderCard
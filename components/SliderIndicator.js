
import { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        margin: theme.spacing(0, 1),
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: theme.palette.common.white,
    },
    active: {
        backgroundColor: theme.palette.primary.main,

        '&:after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 25,
            height: 25,
            borderRadius: '50%',
            border: `2px dashed ${theme.palette.primary.main}`,
        }

    },
}))


const SliderIndicator = ({key,cardSelectHandler,active}) => {
    const classes = useStyles()

    return (
        <div
            className={clsx(classes.root, {[classes.active]:active})}
            onClick={() => cardSelectHandler(key)}
        />
    )

}

export default SliderIndicator
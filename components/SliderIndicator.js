
import { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    root: {

    },
})


const SliderIndicator = () => {
    const [pos, setPos] = useState(0)

    return (
        // <div className={classes.root}>
        //
        // </div>

        <div className='og-container'>
            <div className='og-row'>
                <div className='og-col-24'>

                </div>
            </div>
        </div>
    )
}

export default SliderIndicator
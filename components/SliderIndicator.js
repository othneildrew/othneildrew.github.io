
import { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
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
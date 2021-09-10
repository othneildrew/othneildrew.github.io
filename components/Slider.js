
import { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root: {

    },
})


const Slider = ({children}) => {
    const [pos, setPos] = useState(0)

    return (
        // <div className={classes.root}>
        //
        // </div>

        <div className='og-container'>
            <div className='og-row'>
                <div className='og-col-24 offset-lg-2 og-col-lg-20' style={{border: '1px solid red'}}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Slider
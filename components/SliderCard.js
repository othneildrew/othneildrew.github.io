
import { useState } from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    root: {
        width: 600,
        height: 200,
        backgroundColor: '#0D0020',
        borderRadius: 4,
    },
})


const SliderCard = ({quote,author}) => {
    const classes = useStyles()
    const [pos, setPos] = useState(0)

    return (
        <div className={classes.root}>
            <p>{quote}</p>
            <span>{author}</span>
        </div>

        // <div className='og-container'>
        //     <div className='og-row'>
        //         <div className='og-col-24'>
        //
        //         </div>
        //     </div>
        // </div>
    )
}

export default SliderCard
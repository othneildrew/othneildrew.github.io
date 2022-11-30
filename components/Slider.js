
import { useState } from 'react'
import { makeStyles, Hidden, Container, Grid } from '@material-ui/core'
import SliderIndicator from './SliderIndicator'
import {LeftLongArrowIcon, RightLongArrowIcon} from './core/CustomSvgs';

const useStyles = makeStyles({
    cardWrapper: {
        // display: 'flex',
        // width: '1000%',
        // height: 'inherit',
        // overflow: 'hidden',
        // border: '1px solid red',
    },
})


const Slider = ({children}) => {
    const classes = useStyles()
    const [pos, setPos] = useState(0)

    const handleCardSelect = () => {

    }

    return (
        <Container fixed maxWidth='md'>
            <Grid container spacing={8} justifyContent='center' alignItems='center'>
                <Hidden smDown>
                    <Grid
                        item
                        xs={2}
                        style={{padding:0,textAlign:'right',cursor:'pointer'}}
                        onClick={() => alert('move left')}
                    >
                        <LeftLongArrowIcon />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={10} md={8}>
                    <div className={classes.cardWrapper}>{children}</div>
                </Grid>
                <Hidden smDown>
                    <Grid item xs={2} style={{padding:0}}>
                        <RightLongArrowIcon />
                    </Grid>
                </Hidden>
            </Grid>

            <div style={{display:'flex',justifyContent:'center',paddingTop:16}}>
                {children.map((card, i) => {
                    let isActive = false
                    if (pos === i) isActive = true
                    return (
                        <SliderIndicator key={i} cardSelectHandler={handleCardSelect} active={isActive} />
                    )
                })}
            </div>
        </Container>

        // <div className='og-container'>
        //     <div className='og-row'>
        //         <div className='og-col-24 offset-lg-2 og-col-lg-20' style={{border: '1px solid red'}}>
        //             {children}
        //         </div>
        //     </div>
        // </div>
    )
}

export default Slider

import {
    makeStyles,
    useTheme,
    Container,
    Grid,
    Typography,
} from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        // border: '2px dashed green',

    },
    sectionHead: {

    }
})

const ContentSection = ({maxWidth = 'lg',topPadding = 0,bottomPadding = 0,titleText,titleAlign = 'center',titleTheme = 'light',overrideTitlePadding = null,children}) => {
    const classes = useStyles()
    const theme = useTheme()

    if (overrideTitlePadding === null) {
        overrideTitlePadding = theme.spacing(0, 0, 5, 0)
    }

    let titleColor = titleTheme === 'light' ? '#ffffff' : '#000000'

    return (
        <section className={classes.root} style={{paddingTop: topPadding, paddingBottom: bottomPadding}}>
            <Container fixed maxWidth={maxWidth} style={{border: '1px solid transparent'}}>
                <Grid container style={{border: '1px solid transparent'}}>
                    <Grid item xs={12} style={{border: '1px solid transparent'}}>
                        <Typography variant='h3' style={{padding:overrideTitlePadding,color:titleColor,textAlign:titleAlign}}>{titleText}</Typography>
                    </Grid>
                </Grid>
            </Container>

            {children}
        </section>
    )
}

export default ContentSection
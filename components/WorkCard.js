
import { makeStyles, useTheme, useMediaQuery, Grid, Typography, Button } from '@material-ui/core'
import WorkTag from './WorkTag';
import {ExternalLinkIcon} from './core/CustomSvgs';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(12.5),
        // border: '1px solid green',
        color: theme.palette.common.black,
    },
    imgContainer: {
        marginBottom: theme.spacing(1),
    },
    textContainer: {
        paddingTop: theme.spacing(4),
        // backgroundColor: 'red',
    },
    linkContainer: {
        marginTop: theme.spacing(3),
    },
    mainImg: {
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
    },
    ctaButton: {
        backgroundColor: theme.palette.common.black,
    },
    ctaLink: {
        marginLeft: theme.spacing(1),
    },
}))


const WorkCard = ({project, reverse}) => {
    const classes = useStyles()
    const theme = useTheme()
    const smDownQuery = useMediaQuery(theme.breakpoints.down('sm'))
    const mainImg = project.images.find((i) => i.main === true)



    const renderMainImg = (
        <Grid item xs={9} sm={10} md={6} lg={7}>
            <div className={classes.imgContainer}>
                <img className={classes.mainImg} src={mainImg.src} alt={mainImg.alt} />
            </div>

            {project.tags.map((t) => <WorkTag title={t} />)}
        </Grid>
    )


    return (
        <Grid container spacing={smDownQuery ? 0 : 4} justifyContent='center' className={classes.root}>
            {(!reverse || smDownQuery) && renderMainImg}

            <Grid item xs={9} sm={10} md={4} lg={5}>
                <div className={classes.textContainer}>
                    <Typography variant='h5' component='h3' style={{marginBottom:8,paddingLeft: 8,fontWeight:500}}>{project.name}</Typography>
                    <Typography style={{paddingLeft:8,opacity:0.7}}>{project.description}</Typography>

                    <div className={classes.linkContainer}>
                        <Button
                            variant='contained'
                            className={classes.ctaButton}
                            endIcon={<ExternalLinkIcon size={14} />}
                            disableElevation
                        >
                            Launch Site
                        </Button>

                        <Button
                            variant='text'
                            color='inherit'
                            className={classes.ctaLink}
                            endIcon={<ExternalLinkIcon size={14} color='#000000' />}
                        >
                            View Code
                        </Button>
                    </div>
                </div>
            </Grid>

            {(reverse && !smDownQuery) && renderMainImg}
        </Grid>
    )
}

export default WorkCard



import { makeStyles, Container, Grid, Typography } from '@material-ui/core'
import CommunityProjectCard from './CommunityProjectCard'


const useStyles = makeStyles((theme) => ({
//     root: {
//
//     },
//     grid: {
//         display: 'grid',
//         // gridTemplateColumns: 'repeat(1, 1fr)',
//         justifyContent: 'center',
//         gridGap: 14,
//         // backgroundColor: 'orange',
//         border: '1px dashed green',
//
//         ['@media (min-width: 768px)']: {
//             // gridTemplateColumns: 'repeat(3, 33.333%)',
//             gridTemplateColumns: 'repeat(2, 50%)',
//             borderColor: 'pink',
//             // display: 'none',
//         },
//         [theme.breakpoints.up('md')]: {
//             // gridTemplateColumns: 'repeat(2, 50%)',
//             borderColor: 'red',
//         },
//         [theme.breakpoints.up('lg')]: {
//             gridTemplateColumns: 'repeat(3, 33.333%)',
//             borderColor: 'orange',
//         },
//     }
    ufo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -10,
        position: 'absolute',
        top: -215,
        left: 15,
        width: 'auto',
        height: 300,
        opacity: 0.8,

        '& img': {
            flexShrink: 'none',
            width: 'auto',
            height: '100%',
        },

        [theme.breakpoints.up('sm')]: {
            left: -15,
            height: 400,
        },

        [theme.breakpoints.up('md')]: {
            top: -255,
            left: -55,
            height: 590,
            opacity: 1,
        },
    },
}))

const CommunityProjectGrid = ({projects}) => {
    const classes = useStyles()

    return (
        <Container fixed maxWidth='md' style={{position: 'relative'}}>
            <Grid container spacing={2} justifyContent='center'>
                {projects && projects.map((project, i) => (
                    <Grid xs='10' sm='6' md='4' item key={i}>
                        <CommunityProjectCard key={i} data={project} />
                    </Grid>
                ))}
            </Grid>

            <img className={classes.ufo} src='/imgs/illustrations/ufo.svg' alt='UFO' />
        </Container>
    )
}

export default CommunityProjectGrid
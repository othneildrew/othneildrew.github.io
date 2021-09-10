
import { makeStyles } from '@material-ui/core'
import CommunityProjectCard from './CommunityProjectCard'


const useStyles = makeStyles((theme) => ({
    root: {

    },
    grid: {
        display: 'grid',
        // gridTemplateColumns: 'repeat(1, 1fr)',
        justifyContent: 'center',
        gridGap: 14,
        // backgroundColor: 'orange',
        border: '1px dashed green',

        ['@media (min-width: 768px)']: {
            // gridTemplateColumns: 'repeat(3, 33.333%)',
            gridTemplateColumns: 'repeat(2, 50%)',
            borderColor: 'pink',
            // display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            // gridTemplateColumns: 'repeat(2, 50%)',
            borderColor: 'red',
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(3, 33.333%)',
            borderColor: 'orange',
        },
    }
}))

const CommunityProjectGrid = ({projects}) => {
    const classes = useStyles()

    return (
        <div className='og-container'>
            <div className='offset-1 og-col-22 offset-sm-0 og-col-sm-24 offset-md-2 og-col-md-20 offset-lg-0 og-col-lg-24'>
                <div className={classes.grid}>
                    {projects && projects.map((project, i) => (
                        // <div key={i}>
                            <CommunityProjectCard key={i} data={project} />
                        // </div>
                    ))}

                    {/*<div className='og-col-6'>*/}
                    {/*    <CommunityProjectCard data={projects[0]} />*/}
                    {/*</div>*/}

                    {/*<div className='og-col-6'>*/}
                    {/*    <CommunityProjectCard data={projects[1]} />*/}
                    {/*</div>*/}

                    {/*<div className='og-col-6'>*/}
                    {/*    <CommunityProjectCard data={projects[2]} />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default CommunityProjectGrid
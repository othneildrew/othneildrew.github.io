
import { createUseStyles } from 'react-jss'
import CommunityProjectCard from './CommunityProjectCard'


const useStyles = createUseStyles((theme) => ({
    root: {

    },
    grid: {
        display: 'grid',
        // gridTemplateColumns: 'repeat(1, 1fr)',
        justifyContent: 'center',
        gridGap: 14,
        // backgroundColor: 'orange',
        // border: '1px dashed green',

        [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            // borderColor: 'red',
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
            // borderColor: 'red',
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
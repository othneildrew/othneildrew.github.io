
import { createUseStyles } from 'react-jss'
import CommunityProjectCard from './CommunityProjectCard'


const useStyles = createUseStyles({
    root: {

    },
})

const CommunityProjectGrid = ({projects}) => {
    const classes = useStyles()

    return (
        <div className='og-container'>
            <div className='og-row'>
                {projects && projects.map((project, i) => (
                    <div className='og-col-6'>
                        <CommunityProjectCard key={i} data={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommunityProjectGrid
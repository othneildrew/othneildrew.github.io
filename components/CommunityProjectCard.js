
import { makeStyles } from '@material-ui/core'
import { ExternalLinkIcon, GithubIcon, LinkedInIcon, SourceForkIcon, StarIcon, UsersIcon } from './core/CustomSvgs'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 20,
        width: '100%',
        // minWidth: 330,
        // maxWidth: 340,
        height: 220,
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        [theme.breakpoints.down('md')]: {
            maxWidth: 340,
            // gridTemplateColumns: 'repeat(2, 50%)',
            // borderColor: 'red',
        },
    },
    footer: {
        textAlign: 'right',
    },
    title: {
        fontSize: '1.5em',
        color: '#B65296',
    },
    description: {
        display: 'block',
        marginTop: 10,
        marginBottom: 22,
        opacity: 0.4,
    },
    statsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    stat: {
        display: 'flex',
        alignItems: 'center',
        marginRight: 20,
        '&:last-child': {
            marginRight: 0,
        },
    },
    link: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,

        '&:first-child': {
            marginLeft: 0,
        },
    },
}))


const Stat = ({icon, label}) => {
    const classes = useStyles()

    return (
        <div className={classes.stat}>
            {icon} <span style={{paddingLeft: 5}}>{label}</span>
        </div>
    )
}

const CommunityProjectCard = ({data}) => {
    const classes = useStyles()

    const {name,description,forks,stars,contributors,links} = data

    return (
        <div className={classes.root}>
            <div>
                <p className={classes.title}>{name}</p>
                <span className={classes.description}>{description}</span>

                <div className={classes.statsContainer}>
                    <Stat
                        icon={<SourceForkIcon size={15} />}
                        label={forks}
                    />

                    <Stat
                        icon={<StarIcon size={15} />}
                        label={stars}
                    />

                    <Stat
                        icon={<UsersIcon size={15} />}
                        label={contributors}
                    />
                </div>
            </div>

            <div className={classes.footer}>
                <a href={links.github} className={classes.link}><GithubIcon color='#6FCEDC' /></a>
                <a href={links.demo} className={classes.link}><ExternalLinkIcon color='#6FCEDC' /></a>
            </div>
        </div>
    )
}

export default CommunityProjectCard
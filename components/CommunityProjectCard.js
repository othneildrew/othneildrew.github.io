
import { makeStyles, useTheme, Typography } from '@material-ui/core'
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
            // maxWidth: 340,
            // gridTemplateColumns: 'repeat(2, 50%)',
            // borderColor: 'red',
        },
    },
    footer: {
        textAlign: 'right',
    },
    title: {
        fontFamily: '"IBM Plex Sans Condensed", sans-serif',
        fontSize: '1.5em',
        color: theme.palette.primary.main,
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
        userSelect: 'none',
        pointerEvents: 'none',
        color: 'rgba(255, 255, 255, 0.6)',
        '&:last-child': {
            marginRight: 0,
        },
    },
    link: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        opacity: 0.75,

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
    const theme = useTheme()

    const {name,description,forks,stars,contributors,links} = data

    return (
        <div className={classes.root}>
            <div>
                <p className={classes.title}>{name}</p>
                <span className={classes.description}>{description}</span>

                <div className={classes.statsContainer}>
                    <Stat
                        icon={<SourceForkIcon size={15} color='rgba(255, 255, 255, 0.6)' />}
                        label={forks}
                    />

                    <Stat
                        icon={<StarIcon size={15} color='rgba(255, 255, 255, 0.6)' />}
                        label={stars}
                    />

                    <Stat
                        icon={<UsersIcon size={15} color='rgba(255, 255, 255, 0.6)' />}
                        label={contributors}
                    />
                </div>
            </div>

            <div className={classes.footer}>
                <a href={links.github} className={classes.link}><GithubIcon color={theme.palette.common.white} /></a>
                <a href={links.demo} className={classes.link}><ExternalLinkIcon color={theme.palette.common.white} /></a>
            </div>
        </div>
    )
}

export default CommunityProjectCard
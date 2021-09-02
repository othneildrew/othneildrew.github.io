
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 20,
        width: '100%',
        height: 220,
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
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
    },
})

const CommunityProjectCard = ({data}) => {
    const classes = useStyles()

    const {name,description,forks,stars,contributors,links} = data


    // console.log(props)

    return (
        <div className={classes.root}>
            <div className={classes.body}>
                <p className={classes.title}>{name}</p>
                <span className={classes.description}>{description}</span>

                <div className={classes.statsContainer}>

                </div>
            </div>

            <div className={classes.footer}>
                test
            </div>
        </div>
    )
}

export default CommunityProjectCard
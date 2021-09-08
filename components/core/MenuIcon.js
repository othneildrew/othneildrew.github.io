
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'


const useStyles = createUseStyles({
    root: {
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'flex-end',
        // marginLeft: 20,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        // backgroundColor: 'red',
    },
    barOne: {
        // margin: '6px 0',
        // width: 32,
        // height: 2,
        // backgroundColor: '#ffffff',

        // margin: '6px 0',
        width: 32,
        height: 2,
        backgroundColor: '#ffffff',
        transform: 'rotate(-45deg)',
    },
    barTwo: {
        // margin: '6px 0',
        // width: 20,
        // height: 2,
        // backgroundColor: '#ffffff',
        // margin: '6px 0',

        marginTop: -2,
        width: 32,
        height: 2,
        backgroundColor: '#ffffff',
        transform: 'rotate(45deg)',
    },
})

const MenuIcon = ({open}) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.barOne} />
            <div className={classes.barTwo} />
        </div>
    )
}

export default MenuIcon
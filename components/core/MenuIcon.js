
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'


const useStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginLeft: 20,
        minHeight: 30,
        padding: '6px 0',
        // backgroundColor: 'red',
        transition: '0.4s all',
    },
    rootOpen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    barOne: {
        // margin: '6px 0',
        marginBottom: 12,
        width: 32,
        height: 2,
        backgroundColor: '#ffffff',
        transition: '0.4s all',

        // margin: '6px 0',
        // width: 32,
        // height: 2,
        // backgroundColor: '#ffffff',
        // transform: 'rotate(-45deg)',
    },
    barOneOpen: {
        margin: 0,
        transform: 'rotate(-45deg)',
        // transition: '0.3s all',
    },
    barTwo: {
        // margin: '6px 0',
        width: 20,
        height: 2,
        backgroundColor: '#ffffff',
        transition: '0.4s all',
        // margin: '6px 0',

        // marginTop: -2,
        // width: 32,
        // height: 2,
        // backgroundColor: '#ffffff',
        // transform: 'rotate(45deg)',
    },
    barTwoOpen: {
        marginTop: -2,
        // margin: '-2px 0 6px 0',
        // margin: '-2px 0 0 0',
        width: 32,
        transform: 'rotate(45deg)',
        // transition: '0.3s all',
    },
    // transition: {
    //     transition: '0.3s all',
    // }
})

const MenuIcon = ({open, navToggleHandler}) => {
    const classes = useStyles()

    return (
        <div
            className={clsx(classes.root, {[classes.rootOpen]: open})}
            onClick={() => navToggleHandler()}
        >
            <div className={clsx(classes.barOne, {[classes.barOneOpen]: open})} />
            <div className={clsx(classes.barTwo, {[classes.barTwoOpen]: open})} />
        </div>
    )
}

export default MenuIcon

import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    root: {
        position: 'relative',
        border: '2px dashed green',
    },
    sectionHead: {

    }
})

const ContentSection = ({titleText,titleAlign = 'center',titleTheme = 'light',children}) => {
    const classes = useStyles()

    return (
        <section className={classes.root}>
            <h2 className="h2 pb-8">{titleText}</h2>

            {children}
        </section>
    )
}

export default ContentSection

import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
    root: {
        position: 'relative',
        border: '2px dashed green',
    },
    sectionHead: {

    }
})

const ContentSection = ({topPadding = 0,bottomPadding = 0,titleText,titleAlign = 'center',titleTheme = 'light',children}) => {
    const classes = useStyles()

    return (
        <section className={classes.root} style={{paddingTop: topPadding, paddingBottom: bottomPadding}}>
            <div className='og-container'>
                <div className='og-row'>
                    <div className='og-col-24'>
                        <h2 className="h2 pb-8" style={{textAlign: titleAlign}}>{titleText}</h2>
                    </div>
                </div>
            </div>

            {children}
        </section>
    )
}

export default ContentSection
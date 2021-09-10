
import { makeStyles, useTheme } from '@material-ui/core'


const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        border: '2px dashed green',

    },
    sectionHead: {

    }
})

const ContentSection = ({topPadding = 0,bottomPadding = 0,titleText,titleAlign = 'center',titleTheme = 'light',overrideTitlePadding = null,children}) => {
    const classes = useStyles()
    const theme = useTheme()

    if (overrideTitlePadding === null) {
        overrideTitlePadding = theme.spacing(0, 0, 5, 0)
    }

    let titleColor = titleTheme === 'light' ? '#ffffff' : '#000000'

    return (
        <section className={classes.root} style={{paddingTop: topPadding, paddingBottom: bottomPadding}}>
            <div className='og-container'>
                <div className='og-row'>
                    <div className='og-col-24'>
                        <h2 className="h2" style={{padding: overrideTitlePadding, color: titleColor, fontWeight: 400, textAlign: titleAlign}}>{titleText}</h2>
                    </div>
                </div>
            </div>

            {children}
        </section>
    )
}

export default ContentSection
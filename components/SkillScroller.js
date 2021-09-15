
import { makeStyles, Container } from '@material-ui/core'
import SkillScrollerPanel from './SkillScrollerPanel';


const SkillScroller = ({skills}) => {
    return (
        <Container fixed disableGutters maxWidth='md' style={{border: '1px solid green'}}>
            <div
                style={{
                    width: 2040,
                    height: 'inherit',
                    // overflowX: 'auto',
                    // backgroundColor: 'black',
                }}
            >
                <SkillScrollerPanel
                    title='Front End'
                />

                <SkillScrollerPanel
                    title='Back End'
                />

                <SkillScrollerPanel
                    title='UI/UX'
                />

                <SkillScrollerPanel
                    title='Other'
                />

                <SkillScrollerPanel
                    title='Other 1'
                />

                <SkillScrollerPanel
                    title='Other 2'
                />
            </div>
        </Container>
    )
}

export default SkillScroller

import {makeStyles, Container, Typography} from '@material-ui/core'
import SkillScrollerPanel from './SkillScrollerPanel'

const useStyles = makeStyles((theme) => ({
    subtitle: {
        fontWeight: 500,
    },
    text: {
        position: 'relative',
        paddingLeft: 24,
        opacity: 0.7,

        '&:before': {
            content: '""',
            position: 'absolute',
            top: 9,
            left: 0,
            // transform: 'translateY(-50%)',
            width: 16,
            height: 1,
            backgroundColor: '#ffffff',
        },
    },
}))


const SkillScroller = ({skills}) => {
    const classes = useStyles()

    return (
        <Container fixed maxWidth='md' style={{border: '1px solid transparent'}}>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    width: 2040,
                    height: 'inherit',
                    // overflowX: 'auto',
                    // backgroundColor: 'black',
                }}
            >
                <SkillScrollerPanel
                    title='Languages'
                >
                    <Typography className={classes.subtitle} variant='body2'>Front End</Typography>
                    <Typography className={classes.text} variant='body2' paragraph>
                        JavaScript (including ES6+), Typescript, SASS/SCSS, LESS, CSS3, HTML5
                    </Typography>

                    <Typography className={classes.subtitle} variant='body2'>Backend</Typography>
                    <Typography className={classes.text} variant='body2' paragraph>
                        Node.js, PHP, SQL, Python
                    </Typography>

                    <Typography className={classes.subtitle} variant='body2'>Other</Typography>
                    <Typography className={classes.text} variant='body2' paragraph>
                        C++
                    </Typography>
                </SkillScrollerPanel>


                <SkillScrollerPanel
                    title='Frameworks & Libraries'
                >
                    <Typography className={classes.subtitle} variant='body2'>Frameworks</Typography>
                    <Typography className={classes.text} variant='body2' paragraph>
                        NextJS, Electron, Express, Laravel, Tailwind & Bulma CSS
                    </Typography>

                    <Typography className={classes.subtitle} variant='body2'>Libraries</Typography>
                    <Typography className={classes.text} variant='body2' paragraph>
                        React, React Native, Redux Sequelize, PixiJS, CesiumJS, JQuery, Semantic UI, Bootstrap
                    </Typography>
                </SkillScrollerPanel>


                <SkillScrollerPanel
                    title='Technologies & Tools'
                >
                    <Typography className={classes.subtitle} variant='body2'>Technologies</Typography>
                    <Typography className={classes.text} variant='body2' paragraph>
                        AWS, MongoDB, Redis, Async/Await, Promises, Linux, Nginx, Apache, WordPress
                    </Typography>

                    <Typography className={classes.subtitle} variant='body2'>Tools</Typography>
                    <Typography className={classes.text} variant='body2' paragraph>
                        Git, npm, Webpack, Babel, MySQL
                    </Typography>
                </SkillScrollerPanel>


                <SkillScrollerPanel
                    title='Communication'
                >
                    <Typography className={classes.text} variant='body2'>
                        HTTP/S, TCP/IP (Web Sockets), FTP, WebRTC, REST, AJAX, JSON/XML, SSH, Serial, I2C
                    </Typography>
                </SkillScrollerPanel>


                <SkillScrollerPanel
                    title='UI/UX'
                >
                    <Typography className={classes.text} variant='body2'>
                        Figma, Affinity Designer, GIMP, Photoshop, Moqups, User stories, Wireframes & Prototyping
                    </Typography>
                </SkillScrollerPanel>


                <SkillScrollerPanel
                    title='Embedded Systems & IoT'
                >
                    <Typography className={classes.text} variant='body2' paragraph>
                        Raspberry Pi, Arduino, ESP32/8266
                    </Typography>
                </SkillScrollerPanel>


                <SkillScrollerPanel
                    title='Other'
                >
                    <Typography className={classes.text} variant='body2' paragraph>
                        SEO, Canvas, Microservices, MVC, SCRUM/Agile, Git (Git-Flow), CI/CD, Data scraping, Database normalization, ITAR & 508 Compliance
                    </Typography>
                </SkillScrollerPanel>
            </div>
        </Container>
    )
}

export default SkillScroller

import projects from '../public/data/projects.json'
import testimonials from '../public/data/testimonials.json'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import ContentSection from '../components/core/ContentSection'
import FixedSocialIcons from '../components/FixedSocialIcons'
import CommunityProjectGrid from '../components/CommunityProjectGrid'
import { LinkedInIcon, MailIcon, PhoneIcon } from '../components/core/CustomSvgs'
import useDarkMode from '../utils/hooks/useDarkMode'
import { logHireMeAscii } from '../utils/Utils'
import Slider from '../components/Slider'
import SliderCard from '../components/SliderCard'
import {
    useTheme,
    Container,
    Grid,
    Typography,
    Button,
    // makeStyles
} from '@material-ui/core'
import SkillScroller from '../components/SkillScroller';
import WorkCard from '../components/WorkCard';


// const useStyles = makeStyles((theme) => ({
//
// }))

export async function getStaticProps() {
    return {
        props: {
            projects,
            testimonials,
        },
    }
}

export default function Home({projects}) {
    // const classes = useStyles()
    const theme = useTheme()
    const darkMode = useDarkMode()
    const [hireMeLogged, setHireMeLogged] = useState(false)

    useEffect(() => {
        if (!hireMeLogged) {
            logHireMeAscii(darkMode)
            setHireMeLogged(true)
        }
    }, [])

    return (
        <>
            <Head>
                {/*Meta*/}
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <title>Othneil Drew - Full Stack Developer (Houston, TX | Remote)</title>
                
                {/*SEO*/}
                <meta name='description' content="Houston-based Full Stack Developer focusing on creating bold, unique, and amazing web experiences that help 10x your business' growth." />
                <meta name='keywords' content='Houston, Full Stack Developer, Front-End Web Developer, Aviation Developer, Back-End Developer, JavaScript, PHP, Laravel, React, Bootstrap 4, MySQL, WordPress, Othneil Drew' />
                <meta name='author' content='Othneil I Drew' />
            </Head>

            <FixedSocialIcons />
            <Hero />



            {/*Latest Work Section*/}
            <ContentSection
                topPadding={700}
                bottomPadding={0}
                titleText='Latest Work'
                titleTheme='dark'
            >
                <Container fixed maxWidth='md'>
                    {projects.showcase.map((project, i) => {
                        let reverseOrder = Boolean(i % 2 !== 0) // odd numbers return true
                        return <WorkCard key={i} project={project} reverse={reverseOrder} />
                    })}
                </Container>
            </ContentSection>


            {/*Skills Section*/}
            <ContentSection
                topPadding={600}
                bottomPadding={300}
                titleText='Skills'
                titleAlign='left'
            >
                {/*<SkillScroller />*/}
            </ContentSection>


            {/*Community Projects Section*/}
            <ContentSection
                topPadding={600}
                bottomPadding={300}
                titleText='Community Projects'
            >
                <CommunityProjectGrid projects={projects.openSource} />
            </ContentSection>


            {/*Testimonials Section*/}
            <ContentSection
                topPadding={69}
                bottomPadding={90}
                titleText='Testimonials'
            >
                <Slider>
                    {testimonials.data.map((t, i) => {
                        if (i >= 1) return
                        return (
                            <SliderCard
                                key={i}
                                quote={t.quote}
                                author={t.author}
                            />
                        )
                    })}
                </Slider>
            </ContentSection>


            {/*Contact / Hire Me Section*/}
            <ContentSection
                topPadding={700}
                bottomPadding={480}
                titleText='Interested in working together?'
                overrideTitlePadding={theme.spacing(0, 0, 2, 0)}
            >
                <Typography style={{marginBottom:80,textAlign:'center',fontSize:'1.125em',opacity:0.7}}>Let's talk about your next project or role!</Typography>

                <Container fixed maxWidth='md'>
                    <Grid container justifyContent='center'>
                        <Grid item xs={9} sm={10} md={5} className='' style={{border: '1px solid pink'}}>
                            <p>rocket goes here</p>
                        </Grid>
                        <Grid item xs={9} sm={10} md={5}>
                            <Grid container spacing={4} direction='column' alignItems='center' style={{border: '1px solid pink'}}>
                                <Grid item xs={8} style={{border: '1px solid orange'}}>
                                    <Button
                                        color='default'
                                        startIcon={<LinkedInIcon size={24} />}
                                        fullWidth
                                    >
                                        Connect on LinkedIn
                                    </Button>
                                </Grid>

                                <Grid item xs={12} style={{border: '1px solid orange'}}>
                                    <Button
                                        color='default'
                                        startIcon={<PhoneIcon size={24} />}
                                        fullWidth
                                    >
                                        Connect via Phone
                                    </Button>
                                </Grid>

                                <Grid item xs={8} style={{border: '1px solid orange'}}>
                                    <Button
                                        color='default'
                                        startIcon={<MailIcon size={24} />}
                                    >
                                        Send an Email
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                {/*<TestGrid24 />*/}

                <div
                    style={{
                        zIndex: -10,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(180deg, #140033 0%, #2648FE 100%)',
                    }}
                />
            </ContentSection>






        </>
    )

}
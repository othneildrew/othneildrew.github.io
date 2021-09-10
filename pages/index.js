
import { useEffect } from 'react'
import { useTheme } from 'react-jss'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import ContentSection from '../components/core/ContentSection'
import FixedSocialIcons from '../components/FixedSocialIcons'
import CommunityProjectGrid from '../components/CommunityProjectGrid'
import TestGrid24 from '../components/debug/TestGrid24'
import projects from '../public/data/projects.json'
import testimonials from '../public/data/testimonials.json'
import { LinkedInIcon, MailIcon, PhoneIcon } from '../components/core/CustomSvgs'
import useDarkMode from '../utils/hooks/useDarkMode'
import { logHireMeAscii } from '../utils/Utils'
import Slider from '../components/Slider'
import SliderCard from '../components/SliderCard'


export async function getStaticProps() {
    return {
        props: {
            projects,
            testimonials,
        },
    }
}

export default function Home({projects}) {
    const theme = useTheme()
    const darkMode = useDarkMode()

    useEffect(() => {
        logHireMeAscii(darkMode)
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




            {/*{JSON.stringify(projects)}*/}

            <ContentSection
                topPadding={700}
                bottomPadding={0}
                titleText='Latest Work'
            >



                <TestGrid24 />
            </ContentSection>


            <section style={{marginTop: 644,border: '1px solid transparent'}}>
                <h2>Latest Work</h2>

                <div className='og-container'>
                    <div className='og-row'>
                        <div className='og-col-12'>
                            <div className='project__img-container'>
                                <img src='https://via.placeholder.com' alt='' />
                            </div>

                            <div>
                                <span className='tag'>Laravel</span>
                            </div>
                        </div>
                        <div className='og-col-12'>
                            <p>Alpha Space Launch</p>
                            <p>An unreleased website where customers can send class rings and other paraphernalia to space and receive a certificate of flight, photos, plaque and other items. (Canceled by client for lack of market).</p>
                            <div className='project__btn-container'>

                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <ContentSection
                topPadding={600}
                bottomPadding={300}
                titleText='Skills'
                titleAlign='left'
            >
                the skills section
            </ContentSection>

            <ContentSection
                topPadding={600}
                bottomPadding={300}
                titleText='Community Projects'
            >
                <CommunityProjectGrid projects={projects.openSource} />
                {/*<TestGrid24 />*/}
            </ContentSection>


            <ContentSection
                topPadding={69}
                bottomPadding={600}
                titleText='Testimonials'
            >
                <Slider>
                    {testimonials.data.map((t) => (
                        <SliderCard
                            quote={t.quote}
                            author={t.author}
                        />
                    ))}
                </Slider>


                <TestGrid24 />
            </ContentSection>


            <ContentSection
                topPadding={700}
                bottomPadding={150}
                titleText='Interested in working together?'
                overrideTitlePadding={theme.spacing(0, 0, 2, 0)}
            >
                <p style={{textAlign:'center',fontSize:'1.125em',opacity:0.7}}>Let's talk about your next project or role!</p>

                <div className='og-container mt-18'>
                    <div className='og-row'>
                        <div className='offset-md-3 og-col-md-9' style={{border: '1px solid pink'}}>
                            <p>rocket goes here</p>
                        </div>
                        <div className='og-col-md-7 offset-md-1' style={{border: '1px solid red'}}>
                            <Link href='/'>
                                <a className='my-7 btn btn--outlined btn--light btn--block btn--icon'><LinkedInIcon /> Connect on LinkedIn</a>
                            </Link>

                            <Link href='/'>
                                <a className='my-7 btn btn--outlined btn--light btn--block btn--icon'><PhoneIcon /> Connect via phone</a>
                            </Link>

                            <Link href='/'>
                                <a className='my-7 btn btn--outlined btn--light btn--block btn--icon'><MailIcon /> Send an Email</a>
                            </Link>
                        </div>
                    </div>
                </div>

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


















            {/*<TestGrid24 />*/}

            {/*<TestGrid24 />*/}



        </>
    )

}
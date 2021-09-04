
import Head from 'next/head'
import Hero from '../components/Hero'
import ContentSection from '../components/core/ContentSection'
import FixedSocialIcons from '../components/FixedSocialIcons'
import CommunityProjectGrid from '../components/CommunityProjectGrid'
import TestGrid24 from '../components/debug/TestGrid24'
import projects from '../public/data/projects.json'
import testimonials from '../public/data/testimonials.json'


export async function getStaticProps() {
    return {
        props: {
            projects,
            testimonials,
        },
    }
}

export default function Home({projects}) {


    return (
        <>
            <Head>
                {/*Meta*/}
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <title>Othneil Drew - Full Stack Developer - Houston, TX</title>
                
                {/*SEO*/}
                <meta name='description' content="Houston-based Full Stack Developer focusing on creating bold, unique, and amazing web experiences that help 10x your business' growth." />
                <meta name='keywords' content='Houston, Full Stack Developer, Front-End Web Developer, Aviation Developer, Back-End Developer, JavaScript, PHP, Laravel, React, Bootstrap 4, MySQL, WordPress, Othneil Drew' />
                <meta name='author' content='Othneil I Drew' />
            </Head>

            <Hero />




            {JSON.stringify(projects)}


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


            <section
                style={{
                    padding: '600px 0',
                    border: '1px solid orange',
                }}
            >
                <h2 className='h2 textalign--center pb-8'>Community Projects</h2>

                <CommunityProjectGrid projects={[
                        {
                            name: 'Best-README-Template',
                            description: 'An awesome README template to jumpstart your projects!',
                            forks: '8.5K',
                            stars: '3.6K',
                            contributors: '7',
                            links: {
                                github: '',
                                demo: '',
                            }
                        },
                        {
                            name: 'Best-README-Template',
                            description: 'An awesome README template to jumpstart your projects!',
                            forks: '8.5K',
                            stars: '3.6K',
                            contributors: '7',
                            links: {
                                github: '',
                                demo: '',
                            }
                        },
                        {
                            name: 'Best-README-Template',
                            description: 'An awesome README template to jumpstart your projects!',
                            forks: '8.5K',
                            stars: '3.6K',
                            contributors: '7',
                            links: {
                                github: '',
                                demo: null,
                            }
                        }
                    ]} />
            </section>



            <ContentSection
                topPadding={400}
                bottomPadding={200}
            >
                <h2 className='h2 textalign--center pb-8'>Community Projects</h2>

                <CommunityProjectGrid projects={projects.openSource} />
            </ContentSection>







            <FixedSocialIcons />














            <TestGrid24 />



        </>
    )

}
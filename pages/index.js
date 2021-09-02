
import Head from 'next/head'
import Hero from '../components/Hero'
import FixedSocialIcons from '../components/FixedSocialIcons'


export default function Home() {


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






            <div
                className='og-container fortest view-padding'
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    // backgroundColor: 'green',
                    opacity: 0.4,
                }}
            >
                <div className='og-row'>
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                    <div className='og-col-1' />
                </div>
            </div>



            <FixedSocialIcons />
        </>
    )

}
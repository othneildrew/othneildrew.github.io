'use client';

import { CommunityProjects } from '@/components/CommunityProjects'
import { Testimonials } from '@/components/Testimonials'
import { AboutThisProject } from '@/components/AboutThisProject'
import { SocialLinks } from '@/components/SocialLinks'
import {Contact} from '@/components/Contact';
import {AboutMe} from '@/components/AboutMe';
import {Moon} from '@/components/Moon';
import {useState} from 'react';
import {Loader} from '@/components/Loader';
import {Navbar} from '@/components/Navbar';

export default function Page() {
  const [isLoading] = useState(true);




  if (isLoading) {
    return <Loader />;
  }


  return (
    <div>
      <Moon />

      <Navbar />


      <section className='relative container mx-auto px-4 h-dvh'>
        <div className='h-full pb-20 flex flex-col justify-center'>
          <p className='dark:text-white/70 text-xl pb-6'>
            Senior Software Engineer | UI/UX Pro
          </p>

          <h1 className='font-black-han text-6xl dark:text-white mb-5'>Othneil Drew</h1>

          <h2 className='font-black-han text-3xl mb-[43px] text-secondary-color'>
            Focusing on creating bold, unique, and aMaZInG<br />
            experiences that help 10x your company's growth
          </h2>

          <div className='flex align-middle gap-4'>
            <button className='dark:bg-primary-color text-white py-2.5 px-12 rounded-full font-bold'>
              Hire Me
            </button>
            <a
              className='outline outline-1 outline-primary-color text-white/70 hover:dark:bg-white/10 py-2.5 px-8 rounded-full'
              href="/resumes/OthneilDrewWebDeveloperResume.pdf"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <AboutMe />

      <CommunityProjects />
      <Testimonials />


      <Contact />


      <AboutThisProject />
      <SocialLinks />
    </div>
  )
}

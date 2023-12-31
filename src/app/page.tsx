import { CommunityProjects } from '@/components/CommunityProjects'
import { Testimonials } from '@/components/Testimonials'
import { AboutThisProject } from '@/components/AboutThisProject'
import { SocialLinks } from '@/components/SocialLinks'

export default function Page() {
  return (
    <div>
      <section className='container mx-auto px-4 h-dvh'>
        <div className='h-full pb-20 flex flex-col justify-center'>
          <p className='dark:text-white/70 text-lg pb-4'>
            Full Stack Developer | UI/UX Pro
          </p>
          <h1 className='text-6xl dark:text-white mb-2.5'>Othneil Drew</h1>
          <h2 className='font-display text-5xl mb-[43px] text-secondary-color'>
            I create amazing
            <br /> experiences for the web.
          </h2>

          <div className='flex align-middle gap-4'>
            <button className='dark:bg-primary-color text-white py-2.5 px-12 rounded-full font-bold'>
              Hire Me
            </button>
            <button className='outline outline-1 outline-primary-color text-white/70 hover:dark:bg-white/10 py-2.5 px-8 rounded-full'>
              Resume
            </button>
          </div>
        </div>
      </section>

      <CommunityProjects />
      <Testimonials />
      <AboutThisProject />

      <SocialLinks />
    </div>
  )
}

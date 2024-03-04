import clsx from 'clsx'
import {SectionHeader} from '@/components/SectionHeader';

export const AboutMe = () => {
  const a = '';

  return (
    <section id="about-me" className="container mx-auto mt-[370px] px-4">
      <SectionHeader>About Othneil</SectionHeader>

      <div className="mx-auto flex justify-center gap-10">

        <div className="basis-1/4">
          <img className="rounded-full border-4" src="/images/portrait.jpg" alt="Portrait of Othneil Drew" />
        </div>

        <div className="basis-2/3">
          <p className='mb-3 dark:text-white/85 text-xl font-bold'>Othneil Drew is a creative visionary with a strong background in UI/UX
            design, web development, strategic planning/marketing, and technical writing.</p>
          <p className='mb-3 dark:text-white/75'>He is the founder of Student Pilot Portal, an online platform that enables aspiring aviators to learn about aviation, share their passion for flight, and connect with others worldwide.</p>
          <p className='mb-3 dark:text-white/75'>With 900+ hours of volunteered service to the aviation community, he serves as an advocate for promoting youths education in the industry and is actively involved with many organizations like the Organization of Black Aerospace Professionals, Virgin Islands Chapter Tuskegee Airmnen, Inc., U.S. Dream Academy, and the United States Coast Guard Auxiliary.</p>
          <p className='mb-3 dark:text-white/75'>He has raised more than $2,000 in donations for nonprofits and is responsible for an initial 15% increase in his school's student pilot enrollment which he obtained through social media and print recruitment campaigns.</p>
          <p className='mb-3 dark:text-white/75'>Drew currently works as a Software Engineer in Houston Texas. His other interests are flight simulation, photography, gaming, guitar, and the show NCIS: Los Angeles.</p>
        </div>
      </div>

      <div className="mx-auto w-[60%]">
        <div className="relative mt-[80px] pt-[20px] pb-[56.25%] h-[0px] flex justify-center">
          <iframe className="absolute top-0 left-0 w-[100%] h-[100%]" width="560" height="315" src="https://www.youtube-nocookie.com/embed/wI_IxwJERPc?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>

    </section>
  );
}
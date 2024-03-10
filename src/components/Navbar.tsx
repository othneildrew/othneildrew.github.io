import { clsx } from 'clsx'

export const Navbar = () => {
  const LINKS = [
    'latest-work',
    'skills',
    'testimonials',
    'projects',
  ];

  const active = 'skills';


  return (
    <nav className="sticky container px-4 mx-auto top-4 flex justify-end items-center gap-10">
      {LINKS.map(l => (
        <a
          href={l}
          className={
            clsx('capitalize', {
              'dark:text-white underline underline-offset-4': l === active,
              'dark:text-white/70': l !== active,
            })
          }
        >
          {l.replace('-', ' ')}
        </a>
      ))}
      <a
        className='outline outline-1 outline-primary-color text-white/70 hover:dark:bg-white/10 py-2.5 px-8 rounded-full'
        href="/resumes/OthneilDrewWebDeveloperResume.pdf"
        target="_blank"
      >
        Resume
      </a>
    </nav>
  );
}
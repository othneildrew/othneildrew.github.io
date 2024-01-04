import { FiExternalLink } from 'react-icons/fi'
import { GITHUB_URL } from 'src/constants'

export const AboutThisProject = () => {
  return (
    <section className='container mx-auto px-10 text-center'>
      <p className='dark:text-white/70'>
        This site is dedicated to my sister Sharena who passed away in 2005; her
        favorite color was purple.
      </p>
      <p className='inline-block dark:text-white/40 text-center pt-1 pb-16'>
        <a
          className='inline-flex items-start gap-1 hover:underline underline-offset-4 hover:opacity-75'
          target='_blank'
          href={`${GITHUB_URL}/othneildrew.github.io`}
        >
          View source on GitHub
          <FiExternalLink size={16} />
        </a>
      </p>
    </section>
  )
}

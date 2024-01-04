'use client'

import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { LINKEDIN_URL, GITHUB_URL, EMAIL_URL } from 'src/constants'

export type SocialProviderId = 'linkedin' | 'github' | 'email'

const URL_MAP: Partial<Record<SocialProviderId, string>> = {
  linkedin: LINKEDIN_URL,
  github: GITHUB_URL,
  email: EMAIL_URL,
}

export const SocialLinks = () => {
  const handleClick = (providerId: SocialProviderId) => {
    const link = URL_MAP[providerId]

    if (link) {
      window.open(link)
    }
  }

  return (
    <div className='fixed bottom-0 left-[36px] flex flex-col items-center gap-6'>
      <button onClick={() => handleClick('linkedin')}>
        <FiLinkedin className='dark:text-white/70' size={24} />
      </button>

      <button onClick={() => handleClick('github')}>
        <FiGithub className='dark:text-white/70' size={24} />
      </button>

      <button onClick={() => handleClick('email')}>
        <FiMail className='dark:text-white/70' size={24} />
      </button>

      <div
        id='social-links-abstract-line'
        className='dark:bg-white/70 w-[2px] h-[103px]'
      />
    </div>
  )
}

import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

export const SocialLinks = () => {
  return (
    <div className='fixed bottom-0 left-[36px] flex flex-col items-center gap-6'>
      <button>
        <FiLinkedin className='dark:text-white/70' size={24} />
      </button>

      <button>
        <FiGithub className='dark:text-white/70' size={24} />
      </button>

      <button>
        <FiMail className='dark:text-white/70' size={24} />
      </button>

      <div className='dark:bg-white/70 w-[2px] h-[103px]' />
    </div>
  )
}

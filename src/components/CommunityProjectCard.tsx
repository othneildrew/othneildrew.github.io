import { ProjectStats } from '@/components/ProjectStats'

export const CommunityProjectCard = () => {
  return (
    <div className='my-2 lg:my-0 p-5 dark:bg-black/35 rounded min-h-56 hover:cursor-pointer hover:dark:bg-black/[.15]'>
      <p className='text-primary-color pb-2.5 text-2xl'>Best-README-Template</p>
      <p className='dark:text-white/50'>
        An awesome README template to jumpstart your projects!
      </p>

      <ProjectStats forks={8521} stars={3698} contributors={7} />
    </div>
  )
}

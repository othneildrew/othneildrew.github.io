import { ProjectStats } from '@/components/ProjectStats'

export interface Project {
  name: string
  description: string
  forks?: number
  stars?: number
  contributors?: number
}

export const CommunityProjectCard = ({
  name,
  description,
  forks,
  stars,
  contributors,
}: Partial<Project> = {}) => {
  const stats = { forks, stars, contributors };
  return (
    <div className='my-2 lg:my-0 p-5 dark:bg-black/35 rounded min-h-56 hover:cursor-pointer hover:dark:bg-black/[.15]'>
      <p className='text-primary-color pb-2.5 text-2xl'>{name}</p>
      <p className='dark:text-white/50'>
        {description}
      </p>

      <ProjectStats {...stats} />
    </div>
  )
}

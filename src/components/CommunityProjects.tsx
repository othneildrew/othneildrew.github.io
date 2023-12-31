import { useMemo } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { CommunityProjectCard } from './CommunityProjectCard'
import { Ufo } from '@/components/illustrations/Ufo'

export interface Project {
  name: string
  description: string
  forks?: number
  stars?: number
  contributors?: number
}

export const CommunityProjects = () => {
  const projects = useMemo(
    () => [
      {
        name: 'Best-README-Template',
        description: 'An awesome README template to jumpstart your projects!',
        forks: 8500,
      },
      {
        name: 'Best-README-Template',
        description: 'An awesome README template to jumpstart your projects!',
      },
      {
        name: 'Best-README-Template',
        description: 'An awesome README template to jumpstart your projects!',
      },
    ],
    []
  )

  return (
    <section
      id='community-projects'
      className='relative container mx-auto mt-[537px] px-4 border'
    >
      <Ufo />

      <SectionHeader>Community Projects</SectionHeader>

      <div className='mx-auto columns-1 md:columns-2 lg:columns-3'>
        {projects.map(({ name }) => (
          <CommunityProjectCard key={name} />
        ))}
      </div>
    </section>
  )
}

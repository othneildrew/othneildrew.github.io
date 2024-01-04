import { useMemo } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { CommunityProjectCard } from './CommunityProjectCard'
import { Ufo } from '@/components/illustrations/Ufo'

export const CommunityProjects = () => {
  const projects = useMemo(
    () => [
      {
        name: 'Best-README-Template',
        description: 'An awesome README template to jumpstart your projects!',
        forks: 8500,
      },
      {
        name: 'codedino',
        description:
          'A community-driven developer toolbox for frontend developers.',
      },
      {
        name: 'snaju/inception-framework',
        description:
          'An extremely lightweight PHP-based web framework built with the intention of quick app prototypes using PHP. The architecture takes an API-first approach with a flexible plugin architecture to add functionality like rendering templates.',
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
        {projects.map((props) => (
          <CommunityProjectCard key={props.name} {...props} />
        ))}
      </div>
    </section>
  )
}

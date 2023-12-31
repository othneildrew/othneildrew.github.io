import { GoRepoForked, GoStarFill, GoPeople } from 'react-icons/go'

export interface ProjectStatsProps {
  forks?: number;
  stars?: number;
  contributors?: number;
}

const StatGroup = ({ text, Icon }) => (
  <span className='flex items-center gap-1'>
    <Icon className='dark:text-white' size={16} />
    <p className='dark:text-white/70 text-xl'>{text}</p>
  </span>
);

export const ProjectStats = ({ forks, stars, contributors }: ProjectStatsProps) => (
  <div className='mt-6 flex gap-4'>
    {forks && <StatGroup text='8.5K' Icon={GoRepoForked} />}
    {stars && <StatGroup text='8.5K' Icon={GoStarFill} />}
    {contributors && <StatGroup text='7' Icon={GoPeople} />}
  </div>
)

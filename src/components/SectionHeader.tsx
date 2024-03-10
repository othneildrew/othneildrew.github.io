import { clsx } from 'clsx';

export interface SectionHeaderProps {
  children?: string;
  subhead?: string;
}

export const SectionHeader = ({ children, subhead }: SectionHeaderProps) => (
  <>
    <h2
      className={
        clsx('font-black-han dark:text-white text-center text-4xl', !subhead && 'mb-12')
      }
    >
      {children}
    </h2>
    {subhead && <p className='mx-auto dark:text-white/55 text-lg pt-[14px] text-center'>{subhead}</p>}
  </>
)

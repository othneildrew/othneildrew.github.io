import { useEffect, useState, useRef } from 'react'
import { FiPlay, FiPause } from 'react-icons/fi'
import clsx from 'clsx'

export interface BubbleProgressProps {
  steps?: number
  currentStep?: number
  isPaused?: boolean
  onItemClick?: (step: number) => void
}

export const BubbleProgress = ({
  currentStep,
  steps,
  isPaused,
}: BubbleProgressProps = {}) => {
  // const [step, setStep] = useState(initialStep)

  useEffect(() => {}, [])

  const iconProps = {
    color: 'white',
    size: 16,
  }

  return (
    <div className='flex justify-center py-6 gap-[14px]'>
      {Array.from({ length: steps ?? 0 }).map((_, i) => (
        <div
          key={i}
          // className={`dark:bg-${
          //   i === currentStep ? 'primary-color' : 'white'
          // } cursor-pointer rounded-full w-[16px] h-[16px] hover:scale-125`}
          className={
            clsx('cursor-pointer rounded-full h-[16px] hover:scale-125', {
              'dark:bg-primary-color scale-150 w-[16px]': i === currentStep,
              'dark:bg-white w-[24px]': i !== currentStep,
            })
          }
        />
      ))}

      <button className='rounded-full w-[16px] h-[16px] hover:bg-white/40'>
        {isPaused ? <FiPlay {...iconProps} /> : <FiPause {...iconProps} />}
      </button>
    </div>
  )
}

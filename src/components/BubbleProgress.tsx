import { useEffect, useState, useRef } from 'react'
import { FiPlay, FiPause } from 'react-icons/fi'

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
    <div className='flex justify-center py-6 gap-[10px]'>
      {Array.from({ length: steps ?? 0 }).map((_, i) => (
        <div
          className={`dark:bg-${
            i === currentStep ? 'primary-color' : 'white'
          } cursor-pointer rounded-full w-[16px] h-[16px] hover:scale-125`}
        />
      ))}

      <button className='rounded-full w-[16px] h-[16px] hover:bg-white/40'>
        {isPaused ? <FiPlay {...iconProps} /> : <FiPause {...iconProps} />}
      </button>
    </div>
  )
}

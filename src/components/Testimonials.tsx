'use client'

import { useEffect, useState } from 'react'
import { SectionHeader } from '@/components/SectionHeader'
import { BubbleProgress } from '@/components/BubbleProgress'

export const Testimonials = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const totalSteps = 3

  return (
    <section id='testimonials' className='container mx-auto mt-[370px] px-4'>
      <SectionHeader>Testimonials</SectionHeader>

      <div>
        <div className='dark:bg-[#0d0020] mx-auto p-8 rounded min-h-[170px] max-w-[600px]'>
          <p className='dark:text-white/60 text-lg'>
            Throughout my expereicne, I have met very few with such a vast array
            of knowledge and skills as Mr. Drew. [He] continues to astound me
            with how quickly he can learn and apply new skills.
          </p>
          <cite className="block mt-2 dark:text-white">Captain Roscoe Edwards, Manager</cite>
        </div>
      </div>

      <BubbleProgress currentStep={currentStep} steps={totalSteps} />
    </section>
  )
}

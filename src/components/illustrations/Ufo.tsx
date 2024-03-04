'use client'

import { useEffect, useState, useRef } from 'react'

export const Ufo = ({ followCursor = true }: { followCursor?: boolean }) => {
  const ufoElem = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log('cursor position:::', e)
    }

    const options = {
      root: document.querySelector('#community-projects'),
      rootMrgin: '0px',
      threshold: 1,
    }

    const observer = new IntersectionObserver((entries, observer) => {
      console.log('observer:::', entries)
    }, options)

    if (ufoElem.current) {
      console.log('observer setup:::', ufoElem)
      observer.observe(ufoElem.current)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <svg
      ref={ufoElem}
      className='absolute top-[-200px] pointer-events-none'
      width='410'
      height='591'
      viewBox='0 0 410 591'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M202.009 25.6888C159.149 22.8897 111.872 41.464 88.8559 53.5475C87.2043 54.4146 85.353 52.7318 86.0568 51.0044C115.856 -22.1362 173.538 -0.985662 203.461 22.1791C205.017 23.3833 203.972 25.817 202.009 25.6888Z'
        fill='white'
      />
      <path
        d='M133.379 558.818L126.088 123.515C152.163 96.7533 187.559 101.214 201.998 106.789L410 489.341C288.887 628.981 175.122 593.843 133.379 558.818Z'
        fill='white'
        fillOpacity='0.06'
      />
      <circle cx='39.4557' cy='113.222' r='4.2887' fill='#4C43A1' />
      <circle
        cx='78.9127'
        cy='90.921'
        r='4.2887'
        fill='#4C43A1'
        fillOpacity='0.5'
      />
      <circle cx='127.802' cy='72.0499' r='4.2887' fill='#4C43A1' />
      <circle
        cx='180.127'
        cy='60.0416'
        r='4.2887'
        fill='#4C43A1'
        fillOpacity='0.5'
      />
      <circle cx='232.449' cy='57.4689' r='4.2887' fill='#4C43A1' />
      <circle
        cx='279.625'
        cy='60.0416'
        r='4.2887'
        fill='#4C43A1'
        fillOpacity='0.5'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M314.791 50.6208C293.577 37.7986 225.454 36.6415 146.543 56.3719C59.9147 76.2754 1.8242 110.252 6.30096 129.736C6.40075 130.17 6.53496 130.594 6.70296 131.008C3.12741 129.029 0.910952 126.589 0.241819 123.676C-4.23494 104.192 53.8556 70.2155 140.484 50.3119C230.465 27.8135 306.42 32.4744 314.791 50.6208Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M268.472 78.1198C254.251 69.5255 208.589 68.7502 155.696 81.9752C97.6292 95.3166 58.6911 118.091 61.6919 131.151C61.7588 131.443 61.8488 131.727 61.9615 132.004C59.5644 130.678 58.0784 129.042 57.6299 127.089C54.6291 114.029 93.5672 91.2545 151.634 77.9132C211.948 62.8327 262.86 65.9567 268.472 78.1198Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M216.15 97.8995C208.925 93.5319 185.721 93.1375 158.844 99.8579C129.338 106.637 109.553 118.209 111.077 124.846C111.111 124.993 111.157 125.138 111.214 125.278C109.997 124.605 109.242 123.773 109.014 122.782C107.489 116.145 127.275 104.573 156.78 97.7938C187.429 90.1306 213.299 91.7184 216.15 97.8995Z'
        fill='white'
      />
      <path
        d='M223.013 33.8809C172.675 32.919 110.802 53.2301 81.2128 65.345C80.1612 65.7756 79.3669 64.4733 80.2631 63.7747C125.976 28.1395 212.25 26.016 223.013 33.8809Z'
        fill='#4C43A1'
      />
    </svg>
  )
}

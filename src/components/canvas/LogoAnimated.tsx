'use client'
import { CustomGeometryParticles } from '@/components/canvas/CustomGeometryParticles'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Vector3 } from 'three'

export const Logoanimated = ({}) => {
  const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
      <div className='flex h-96 w-full flex-col items-center justify-center'>
        <svg className='-ml-1 mr-3 size-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
          <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
          <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          />
        </svg>
      </div>
    ),
  })
  const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

  const handleLogoTouch = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className='hidden h-[95%] md:block'>
        <View className='size-full'>
          <Suspense fallback={null}>
            <CustomGeometryParticles fitToBox shape='square' picture='/img/desktop_logo.png' animDuration={5} />
            <directionalLight />
            <pointLight position={[-30, 0, -30]} power={10.0} />
            <Common />
          </Suspense>
        </View>
      </div>
      <div className='block h-5/6 md:hidden' onTouchStart={handleLogoTouch}>
        <View className='size-full'>
          <Suspense fallback={null}>
            <CustomGeometryParticles shape='square' picture='/img/mobile_logo.png' isMobile fitToBox animDuration={5} />
            <Common cameraPosition={new Vector3(0, 0, 6)} />
            <directionalLight />
            <pointLight position={[-30, 0, -30]} power={10.0} />
          </Suspense>
        </View>
      </div>
    </>
  )
}

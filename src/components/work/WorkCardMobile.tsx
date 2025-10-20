'use client'
import { UsedTechList, TechName } from '@/components/UsedTechList'
import Image from 'next/image'
import { useTransitionRouter } from '@/utils/transitionAnimation'

interface WorkCardProps {
  src: string
  title: string
  description: string
  usedTechnology: TechName[]
  to: string
}

export const WorkCard = ({ src, title, description, usedTechnology, to }: WorkCardProps) => {
  const router = useTransitionRouter()

  return (
    <div
      onClick={() => router.handleTransition(to)}
      className='font-ubuntu bg-linear-to-br border-pink/5 group relative z-20 mx-auto my-4 flex max-h-[600px] w-full max-w-xl cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 from-purple-800/5 to-cyan-400/5 px-4 pt-4 text-white shadow-lg backdrop-blur-md md:my-6'
    >
      <div className='pointer-events-none absolute inset-0 z-10 rounded-2xl [box-shadow:inset_0_-20px_60px_-10px_#ffffff3f]' />
      <div className='pointer-events-none absolute inset-0 z-0 overflow-hidden'>
        <Image
          src={src}
          fill
          alt={title}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
          priority
        />
      </div>
      <div className='font-ubuntu group pointer-events-auto relative z-20 flex w-full flex-col text-center'>
        <h2 className='h-64 translate-y-0 transform px-2 text-center text-2xl font-bold tracking-tight transition-transform duration-500 ease-in-out group-hover:translate-y-1 md:text-3xl'>
          {title}
        </h2>
        <div className='mb-4 flex w-full flex-col items-center justify-center'>
          <p className='font-heebo mt-1 translate-y-4 px-3 text-center text-xs text-gray-300 transition-transform duration-500 ease-in-out group-hover:translate-y-2 md:text-sm'>
            {description}
          </p>
          <div className='my-2 flex w-full justify-center'>
            <UsedTechList technologies={usedTechnology} />
          </div>
        </div>
      </div>
    </div>
  )
}

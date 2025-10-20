'use client'
import { useRef, Suspense } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import { FaReact, FaNodeJs, FaVuejs } from 'react-icons/fa'
import { FaUnity } from 'react-icons/fa6'
import { RiTailwindCssFill } from 'react-icons/ri'
import { PiFileCSharp } from 'react-icons/pi'
import { SiBlender, SiCinema4D, SiPrisma, SiAseprite } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { UsedTechList } from '@/components/UsedTechList'
import * as THREE from 'three'
import { useTransitionRouter } from '@/utils/transitionAnimation'

const techIcons = {
  NextJs: <TbBrandNextjs />,
  React: <FaReact />,
  TypeScript: <TbBrandTypescript />,
  NodeJs: <FaNodeJs />,
  VueJs: <FaVuejs />,
  Unity: <FaUnity />,
  TailwindCSS: <RiTailwindCssFill />,
  CSharp: <PiFileCSharp />,
  Blender: <SiBlender />,
  Cinema4D: <SiCinema4D />,
  Prisma: <SiPrisma />,
  Aseprite: <SiAseprite />,
  MySQL: <GrMysql />,
} as const

type TechName = keyof typeof techIcons

interface WorkCardProps {
  model: any
  title: string
  description: string
  usedTechnology: TechName[]
  to: string
}

export const WorkCard = ({ model, title, description, usedTechnology, to }: WorkCardProps) => {
  const DynamicModel = dynamic(
    () => import('@/components/canvas/Models').then((mod) => mod[model as keyof typeof mod]),
    { ssr: false },
  )

  const modelRef = useRef<any>(null)
  const ref = useRef<HTMLDivElement>(null)
  const router = useTransitionRouter()

  const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false,
    loading: () => (
      <div className='absolute inset-0 z-50 size-full flex flex-col items-center justify-center'>
        <svg className='-ml-1 mr-3 size-5 animate-spin text-white' fill='none' viewBox='0 0 24 24'>
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

  const CameraController = () => {
    const { camera, pointer } = useThree()

    useFrame(() => {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.5, 0.07)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, -pointer.y * 1.5, 0.07)
      camera.lookAt(0, 1, 0)
    })

    return null
  }

  return (
    <div
      onClick={() => {
        router.handleTransition(to)
      }}
      className='font-ubuntu border-pink/5 group relative mx-auto my-4 flex max-h-[600px] w-full max-w-xl flex-col items-center justify-center overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-purple-800/5 to-cyan-400/5 px-4 pt-4 text-white shadow-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-10px_50px_-10px_#ffffff1f_inset] hover:cursor-pointer md:my-6'
    >
      <View className='absolute inset-0 size-full'>
        <Suspense fallback={null}>
          <DynamicModel ref={modelRef} />
          <Common
            cameraPosition={new THREE.Vector3(-0.04244707683370108, 2.42108826638258, -10.075935083882978)}
            environment
          />
          <CameraController />
        </Suspense>
      </View>
      <div className='relative font-ubuntu z-10 flex flex-col w-full text-center pointer-events-none group' ref={ref}>
        <h2 className='text-2xl md:text-3xl font-bold text-center tracking-tight h-64 transform transition-transform duration-500 ease-in-out translate-y-0 group-hover:translate-y-1 px-2'>
          {title}
        </h2>
        <div className='w-full flex flex-col justify-center items-center mb-4'>
          <p className='text-gray-300 text-xs md:text-sm translate-y-4 transition-transform duration-500 ease-in-out group-hover:translate-y-2 mt-1 font-heebo text-center px-3'>
            {description}
          </p>
          <div className='my-2 w-full flex justify-center'>
            <UsedTechList technologies={usedTechnology} />
          </div>
        </div>
      </div>
    </div>
  )
}

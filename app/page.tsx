'use client'

import { Experience } from '@/components/Experience'
import { Navbar } from '@/components/Navbar'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Logoanimated } from '@/components/canvas/LogoAnimated'
import { Work } from '@/components/work/Work'
import { addEffect } from '@react-three/fiber'
import Lenis from 'lenis'
import { MobileWork } from '@/components/work/WorkMobile'
import { ShownSkills } from '@/components/ShownSkills'
const DynamicSkillsGame = dynamic(() => import('@/components/canvas/SkillsGame'), { ssr: false })

export default function Page() {
  const [isMobile, setIsMobile] = useState(false)
  const shotSkills = useRef(new Set<string>())

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    }
  }, [])

  useEffect(() => {
    const lenis = new Lenis({ syncTouch: true })
    const unsubscribe = addEffect((t) => lenis.raf(t))

    return () => {
      unsubscribe()
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <main className='flex flex-col items-center justify-between overflow-hidden bg-[#070707] p-10 font-mono text-white'>
        <div className='relative h-screen w-screen'>
          <Navbar />
          <Logoanimated />
          {/* TODO: fix the background blur */}
          <div className='absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-1/2 flex-col rounded-xl border-2 border-pink/5 bg-gradient-to-br from-purple-800/5 to-cyan-400/5 p-6 shadow-lg backdrop-blur-2xl md:top-1/2'>
            <div className='flex items-center justify-between font-ubuntu'>
              <h1 className='text-xl font-bold'>Mehdi Popal</h1>
              <div className='ml-4 flex gap-3 md:ml-0'>
                <button className='button'>
                  <a
                    key='1'
                    href='mailto:mehdipopal@outlook.de'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex size-8 items-center justify-center rounded-lg border border-pink/5 hover:bg-sky-950'
                  >
                    <Image src='/img/email_icon.png' alt='Email' width={32} height={32} />
                  </a>
                </button>
                <button className=''>
                  <a
                    key='2'
                    href='https://github.com/mehdi-000'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex size-8 items-center justify-center rounded-lg border border-pink/5 hover:bg-sky-950'
                  >
                    <Image src='/img/github_icon.png' alt='Github' width={32} height={32} />
                  </a>
                </button>
                <button className=''>
                  <a
                    key='3'
                    href='https://www.linkedin.com/in/mehdi-popal-65a2a525a'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex size-8 items-center justify-center rounded-lg border border-pink/5 shadow-lg hover:bg-sky-950'
                  >
                    <Image src='/img/linkedin_icon.png' alt='Linkedin' width={32} height={32} />
                  </a>
                </button>
              </div>
            </div>
            <div className='flex items-center gap-1 text-sm text-gray-400'>
              <div className='size-4'>
                <svg style={{ margin: 0 }} viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M6 3.5C6 2.67157 6.67157 2 7.5 2S9 2.67157 9 3.5 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5zM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5 10 2.11929 8.88071 1 7.5 1 6.11929 1 5 2.11929 5 3.5c0 1.20948.85888 2.21836 2 2.44999V13.5c0 .2761.22386.5.5.5s.5-.2239.5-.5V5.94999z'
                    fill='currentcolor'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </div>
              <p className='font-heebo'>Hamburg, Germany </p>
            </div>
            <p className='mt-4 hidden font-heebo text-base text-gray-300 md:block'>
              I am a Software Engineer with 2 years of experience, skilled in both
              <br className='hidden md:block' />
              front-end and back-end development, with a specialization in web
            </p>
            <p className='mt-4 font-heebo text-sm text-gray-300 md:hidden'>
              I am a fullstack Software Engineer with 2 years of experience
            </p>
          </div>
        </div>
        <div className='spacer m-16 hidden w-full md:block'></div>
        <div className='mb-6 flex w-full justify-evenly md:h-20'>
          <h1 id='experience' className='text-center font-pPMonumentExtended text-4xl leading-[2.75rem] tracking-wide'>
            Experience
          </h1>
        </div>
        <div className=''>
          <Experience />
        </div>
        <div className='spacer m-16 w-full'></div>
        <div className='spacer m-16 w-full md:block'></div>
        <div className='mb-4 flex w-full justify-evenly md:h-20'>
          <h2 id='work' className='font-pPMonumentExtended text-4xl leading-[2.75rem] tracking-wide'>
            Work
          </h2>
        </div>
        {isMobile ? <MobileWork /> : <Work />}
        <div className='spacer m-32 w-full'></div>
        <div className='mb-8 flex w-full justify-evenly md:h-20'>
          <div className='text-center'>
            <h1
              id='skills'
              className='mb-2 text-center font-pPMonumentExtended text-4xl leading-[2.75rem] tracking-wide'
            >
              Skills
            </h1>
          </div>
        </div>
        {isMobile ? (
          <div className='px-4 pt-10'>
            <div className='rounded-2xl border border-pink/5 bg-gradient-to-br from-purple-800/5 to-cyan-400/5 p-6 shadow-lg backdrop-blur-sm'>
              <ShownSkills shotSkillsRef={shotSkills} />
            </div>
          </div>
        ) : (
          <div className='z-10 items-center md:flex md:w-[96%]'>
            <DynamicSkillsGame />
          </div>
        )}
      </main>
    </>
  )
}

'use client'
import { useEffect, useState } from 'react'
import { groupedTechIcons } from '@/components/UsedTechList'

interface ShownSkillsProps {
  shotSkillsRef: React.MutableRefObject<Set<string>>
}

export const ShownSkills = ({ shotSkillsRef }: ShownSkillsProps) => {
  const [shotSkills, setShotSkills] = useState<Set<string>>(new Set())

  useEffect(() => {
    const checkForUpdates = () => {
      if (shotSkillsRef.current.size !== shotSkills.size) {
        setShotSkills(new Set(shotSkillsRef.current))
      }
    }

    checkForUpdates()

    const interval = setInterval(checkForUpdates, 1000)
    return () => clearInterval(interval)
  }, [shotSkillsRef, shotSkills.size])

  return (
    <div className='w-full space-y-12'>
      {Object.entries(groupedTechIcons).map(([groupName, groupIcons]) => (
        <div key={groupName} className='space-y-6'>
          <div className='text-center'>
            <h2 className='font-pPMonumentExtended mb-2 text-2xl font-bold tracking-wide text-white'>{groupName}</h2>
          </div>
          <div className='grid grid-cols-3 place-items-center gap-6 sm:grid-cols-4 md:grid-cols-5'>
            {Object.entries(groupIcons).map(([name, Icon]) => {
              const isShot = shotSkills.has(name)
              return (
                <div
                  key={name}
                  className={`group flex flex-col items-center justify-center text-center text-white transition-all duration-500 transform ${
                    isShot ? 'scale-95 opacity-60' : 'hover:scale-105 hover:opacity-100'
                  }`}
                >
                  <div className='relative p-4 rounded-xl bg-gradient-to-br from-purple-800/10 to-cyan-400/10 border border-pink/10 backdrop-blur-sm transition-all duration-300 group-hover:border-pink/20 group-hover:shadow-lg group-hover:shadow-purple-500/10'>
                    <div
                      className={`text-4xl transition-all duration-500 ${isShot ? 'opacity-30' : 'group-hover:text-cyan-300'}`}
                    >
                      {Icon}
                    </div>
                    {isShot && (
                      <div className='pointer-events-none absolute inset-0 flex items-center justify-center'>
                        <div className='h-[3px] w-full rotate-[-20deg] bg- shadow-[0_0_8px_#3d2fd4]' />
                      </div>
                    )}
                    {!isShot && (
                      <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-purple-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                    )}
                  </div>
                  <div
                    className={`font-heebo mt-3 text-xs transition-all duration-500 sm:text-sm ${
                      isShot
                        ? 'line-through decoration-gradient-to-r decoration-cyan-400 decoration-[3px] opacity-50'
                        : 'opacity-80 group-hover:opacity-100 group-hover:text-gray-200'
                    }`}
                  >
                    {name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}

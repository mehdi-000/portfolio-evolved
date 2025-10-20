'use client'

import { useState, useEffect } from 'react'

type ToggleProps = {
  isOn?: boolean
  onChange?: (isOn: boolean) => void
}

export const Toggle = ({ isOn: isOnDefault = false, onChange }: ToggleProps) => {
  const [isOn, setIsOn] = useState(isOnDefault)
  const [isVisible, setIsVisible] = useState(true)

  const onToggle = () => {
    setIsOn((prev) => !prev)
    onChange?.(!isOn)
  }

  useEffect(() => {
    if (isOn) {
      setTimeout(() => setIsVisible(false), 400)
    }
  }, [isOn])

  if (!isVisible) return null

  return (
    <div className='font-heebo fixed inset-0 z-50 flex items-center justify-center bg-zinc-800/30 backdrop-blur-2xl transition-opacity duration-300 md:hidden'>
      <div className='text-center'>
        <p className='mb-4 text-lg font-medium text-white'>
          Please activate the gyro sensors <br /> to continue
        </p>
        <label className='flex cursor-pointer items-center justify-center'>
          <div className='relative'>
            <input type='checkbox' className='hidden' onChange={onToggle} checked={isOn} />
            <div
              className={`h-8 w-14 rounded-full shadow-inner transition-colors duration-300 ${
                isOn ? 'bg-[#c23e91]' : 'bg-[#38B9D6]'
              }`}
            />
            <div
              className={`absolute left-1 top-1 size-6 rounded-full bg-white shadow transition-transform duration-300 ${
                isOn ? 'translate-x-full' : ''
              }`}
            />
          </div>
        </label>
      </div>
    </div>
  )
}

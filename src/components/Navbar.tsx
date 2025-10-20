'use client'

import React, { useEffect, useRef } from 'react'
import { TransitionLink } from '@/utils/transitionAnimation'
import gsap from 'gsap'
const PARTICLE_COUNT = 100
const PARTICLE_COLORS = ['#38B9D6', '#34E1EB', '#56E0C9']

export const Navbar = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    particlesRef.current = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.backgroundColor = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)]
      particle.style.width = particle.style.height = `${Math.random() * 1 + 2}px`
      particle.style.opacity = '0'
      particle.style.position = 'absolute'
      container.appendChild(particle)
      particlesRef.current.push(particle)
    }
  }, [])

  const generateRoundedRectOutline = (width: number, height: number, borderRadius: number, spacing: number) => {
    const points: { x: number; y: number }[] = []
    for (let x = -width / 2 + borderRadius; x <= width / 2 - borderRadius; x += spacing) {
      points.push({ x, y: -height / 2 })
      points.push({ x, y: height / 2 })
    }
    for (let y = -height / 2 + borderRadius; y <= height / 2 - borderRadius; y += spacing) {
      points.push({ x: -width / 2, y })
      points.push({ x: width / 2, y })
    }

    const cornerSteps = Math.ceil(((Math.PI / 2) * borderRadius) / spacing)
    for (let i = 0; i <= cornerSteps; i++) {
      const angle = (i / cornerSteps) * (Math.PI / 2)
      const dx = Math.cos(angle) * borderRadius
      const dy = Math.sin(angle) * borderRadius

      points.push({
        x: -width / 2 + borderRadius - dx,
        y: -height / 2 + borderRadius - dy,
      })
      points.push({
        x: width / 2 - borderRadius + dx,
        y: -height / 2 + borderRadius - dy,
      })
      points.push({
        x: width / 2 - borderRadius + dx,
        y: height / 2 - borderRadius + dy,
      })
      points.push({
        x: -width / 2 + borderRadius - dx,
        y: height / 2 - borderRadius + dy,
      })
    }

    return points
  }

  const animateParticles = (direction: 'explode' | 'implode', target: HTMLElement) => {
    const container = containerRef.current
    if (!container) return
    if (typeof window !== 'undefined' && window.innerWidth < 768) return

    const outlinePoints = generateRoundedRectOutline(200, 50, 20, 5)
    const rect = target.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2 - containerRect.left
    const centerY = rect.top + rect.height / 2 - containerRect.top

    const shuffledPoints = [...outlinePoints].sort(() => Math.random() - 0.5)

    particlesRef.current.forEach((particle, i) => {
      const { x, y } = shuffledPoints[i % shuffledPoints.length]

      if (direction === 'explode') {
        const angle = Math.random() * Math.PI * 2
        const radius = 80 + Math.random() * 60
        const startX = centerX + Math.cos(angle) * radius
        const startY = centerY + Math.sin(angle) * radius

        gsap.set(particle, {
          x: startX,
          y: startY,
          opacity: 0.6,
          scale: 0.4,
        })
        gsap.to(particle, {
          x: centerX + x,
          y: centerY + y,
          scale: 0.5,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
        })
      } else {
        gsap.set(particle, {
          x: centerX + x,
          y: centerY + y,
          opacity: 1,
          scale: 0.5,
        })
        const angle = Math.random() * Math.PI * 2
        const radius = 80 + Math.random() * 60
        const endX = centerX + Math.cos(angle) * radius
        const endY = centerY + Math.sin(angle) * radius

        gsap.to(particle, {
          x: endX,
          y: endY,
          scale: 0.3,
          opacity: 0,
          duration: 1.2,
          ease: 'power2.in',
        })
      }
    })
  }

  return (
    <div className='relative flex justify-center w-full bg-[#070707]'>
      <div ref={containerRef} className='absolute inset-0 pointer-events-none z-0' />
      <div className='z-10 mx-auto w-fit flex items-center gap-6 px-2 text-white font-pPMonumentExtended tracking-wide leading-[2.75rem] text-sm md:w-3/6 md:justify-around md:text-xl'>
        {['work', 'experience', 'skills'].map((label) => (
          <TransitionLink
            key={label}
            href={`/#${label}`}
            className='relative px-1 py-2 transition hover:scale-105  hover:text-[#38B9D6] md:px-4'
            onMouseEnter={(e) => animateParticles('explode', e.currentTarget)}
            onMouseLeave={(e) => animateParticles('implode', e.currentTarget)}
          >
            {label}
          </TransitionLink>
        ))}
      </div>
      <style jsx global>{`
        .particle {
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  )
}

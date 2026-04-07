'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/Carousel'
import { Card, CardContent } from '@/components/ui/Card'
import { Navbar } from '@/components/Navbar'
import { ProjectInfoCard } from '@/components/ProjectInfoCard'
import Image from 'next/image'
import { useState } from 'react'
import CartComponent from '@/cart/CartComponent'

export default function CyberpunkCar() {
  const [isReadyToPlay, setIsReadyToPlay] = useState(false)
  const handlePlayClick = () => setIsReadyToPlay((prev) => !prev)
  const cartImages = [
    'cart_render_lback.png',
    'cart_render_lfront.png',
    'cart_render_lside.png',
    'cart_render_rback.png',
  ]

  return (
    <main className='font- flex flex-col items-center justify-between overflow-hidden bg-[#070707] p-10 text-white'>
      <Navbar />
      <div className='h-14 w-full' />
      <div className='w-10/12 '>
        {!isReadyToPlay ? (
          <Carousel
            opts={{
              loop: true,
              breakpoints: {
                '(max-width: 767px)': {
                  slides: '.embla-slide-mobile',
                },
                '(min-width: 768px)': {
                  slides: '.embla-slide',
                },
              },
            }}
            className='max-w-(--breakpoint-xl) w-full'
          >
            <CarouselContent className='-ml-1'>
              {cartImages.map((filename, index) => (
                <CarouselItem
                  key={index}
                  className='embla-slide embla-slide-mobile basis-full pl-1 sm:basis-full md:basis-1/2'
                >
                  <div className='p-3'>
                    <Card className='h-full border-2 border-pink/5 bg-inherit'>
                      <CardContent className='relative h-56 w-full sm:h-64 md:h-80'>
                        <Image
                          src={`/img/cart/${filename}`}
                          alt={filename}
                          fill
                          className='rounded-2xl'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          priority
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}

              <CarouselItem className='embla-slide hidden pl-1 md:block md:basis-1/2'>
                <div className='flex h-full items-center justify-center p-3'>
                  <Card className='size-full border-2 border-pink/10 bg-inherit'>
                    <CardContent className='flex h-56 w-full flex-col items-center justify-center gap-10 p-6 text-center sm:h-64 md:h-80'>
                      <p className='text-sm leading-relaxed text-white sm:text-base md:text-xl'>
                        Click the show button to see the cart in action!
                      </p>
                      <div className='group relative'>
                        <button
                          className='rounded-lg border-2 border-white/10 bg-white px-10 py-2 ring-0 ring-transparent transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:text-[#3d2fd4] group-hover:shadow-[0_0_60px_#3d2fd4dd] group-hover:ring-2 group-hover:ring-[#3d2fd4]'
                          onClick={handlePlayClick}
                        >
                          Show
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='border-2 border-pink/5 bg-inherit hover:bg-[#c23e91] md:hover:bg-[#38B9D6]' />
            <CarouselNext className='border-2 border-pink/5 bg-inherit hover:bg-[#c23e91] md:hover:bg-[#38B9D6]' />
          </Carousel>
        ) : (
          <CartComponent />
        )}
      </div>
      <div className='h-14 w-full' />
      <div className='font-heebo md:w-2/5'>
        <ProjectInfoCard
          genre='3D Model'
          agency='Uni Project'
          title='Cyberpunk Cart'
          technologies={['Cinema4D', 'Blender']}
          description={
            <p className='mb-6 mt-8'>
              This low-poly 3D cart was modeled in Cinema4D and textured in Blender. It&apos;s designed for a cyberpunk
              future which is a blend between our and future tech.
            </p>
          }
        />
        <div className='h-6 w-full' />
        <h2 className='mt-6 text-xl font-bold'>Focus</h2>
        <p className='my-4 text-sm leading-relaxed text-gray-300'>
          I put special focus on the exposed internal components from the engine parts to the suspension and seating
          making them not differ too much from our reality to make it feel grounded, even in a sci-fi world.
        </p>

        <h2 className='text-xl font-bold'>Why are some parts floating?</h2>
        <p className='my-4 text-sm leading-relaxed text-gray-300'>
          The cart is held together by magnetic fields that&apos;s why the body, engine, and steering wheel appear to
          float. The thing above the seat is supposed to be a floating HUD display giving the driver extra information.
        </p>

        <h2 className='text-xl font-bold'>What&apos;s that on the engine?</h2>
        <p className='my-4 text-sm leading-relaxed text-gray-300'>
          That&apos;s the logo of the fictional manufacturer a nod to the worldbuilding in{' '}
          <a key={1} href='/wotw' target='_blank' rel='noopener noreferrer'>
            <strong>Way of a Warrior</strong>
          </a>
        </p>
      </div>
    </main>
  )
}

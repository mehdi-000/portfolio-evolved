'use client'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/Carousel'
import { Card, CardContent } from '@/components/ui/Card'

type ImageCarouselProps = {
  imagesPath: string[]
  directoryPath: string
  onPlayClick: React.MouseEventHandler<HTMLButtonElement>
}

export const ImageCarousel = ({ imagesPath, directoryPath, onPlayClick }: ImageCarouselProps) => (
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
      {imagesPath.map((filename, index) => (
        <CarouselItem key={index} className='pl-1 basis-full sm:basis-full md:basis-1/2 embla-slide embla-slide-mobile'>
          <div className='p-3'>
            <Card className='border-2 border-pink/5 bg-inherit h-full'>
              <CardContent className='relative h-56 sm:h-64 md:h-80 w-full'>
                <Image
                  src={`/img/${directoryPath}/${filename}`}
                  alt={filename}
                  fill
                  className='rounded-2xl'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
      <CarouselItem className='hidden md:block pl-1 md:basis-1/2 embla-slide'>
        <div className='p-3 h-full flex items-center justify-center'>
          <Card className='border-2 border-pink/10 bg-inherit h-full w-full'>
            <CardContent className='flex flex-col gap-10 items-center justify-center h-56 sm:h-64 md:h-80 w-full text-center p-6'>
              <p className='text-sm sm:text-base md:text-xl leading-relaxed text-white'>
                Click the Play button to try it out yourself!
              </p>
              <div className='relative group'>
                <button
                  className='rounded-lg px-10 py-2 bg-white border-2 border-white/10 ring-0 ring-transparent transition-all duration-300 ease-out transform group-hover:-translate-y-1 group-hover:shadow-[0_0_60px_#3d2fd4dd] group-hover:ring-2 group-hover:text-[#3d2fd4] group-hover:ring-[#3d2fd4]'
                  onClick={onPlayClick}
                >
                  Play
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>

    <CarouselPrevious className='bg-inherit border-2 border-pink/5 hover:bg-[#c23e91] md:hover:bg-[#38B9D6]' />
    <CarouselNext className='bg-inherit border-2 border-pink/5 hover:bg-[#c23e91] md:hover:bg-[#38B9D6]' />
  </Carousel>
)

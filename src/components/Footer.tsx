import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'

export const Footer = () => (
  <footer className='h-screen w-full bg-[#070707] flex flex-col overflow-hidden justify-center'>
    <div className='h-14 w-full' />
    <div className='flex flex-col justify-center items-center w-full h-full overflow-hidden'>
      <h2 className='text-5xl font-extrabold tracking-wide bg-gradient-to-br from-purple-800 to-cyan-400 bg-clip-text text-transparent font-heebo text-center leading-relaxed'>
        Let&apos;s work together.
      </h2>
      <div className='relative m-6 group'>
        <a href='mailto:mehdipopal@outlook.de'>
          <button className='font-semibold md:px-[4rem] md:py-6 px-[2rem] py-3.5 rounded-2xl text-white/90 border-2 border-white backdrop-blur-md transition-all duration-300 ease-out transform group-hover:cursor-pointer group-hover:-translate-y-1  group-hover:shadow-[0_0_30px_#38B9D6aa] group-hover:border-[#38B9D6]'>
            mehdipopal@outlook.de
          </button>
        </a>
      </div>
      <p className='mt-4 text-sm text-zinc-400'></p>
    </div>

    <div className='text-sm w-full flex flex-col items-center'>
      <div className='w-5/6 border-t border-zinc-700 mt-6 mb-4' />
      <div className='w-5/6 font-heebo flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-500 pb-4 gap-3'>
        <div className='flex items-center gap-2'>
          <p className='leading-none'>Built with ♡ using</p>
          <FaReact className='text-lg' />
          <p className='leading-none'>React &</p>
          <TbBrandNextjs className='text-lg' />
          <p className='leading-none'>Next</p>
        </div>
        <p className='text-right font-heebo text-xs text-zinc-500 whitespace-nowrap'>
          © {new Date().getFullYear()} Mehdi Popal. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

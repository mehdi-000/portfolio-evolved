'use client'
import { Navbar } from '@/components/Navbar'
import { ProjectInfoCard } from '@/components/ProjectInfoCard'
import { ImageCarousel } from '@/components/ImageCarousel'
import { useState } from 'react'

export default function Wotw() {
  const [isReadyToPlay, setIsReadyToPlay] = useState(false)
  const handleReadyToPlay = () => setIsReadyToPlay((prev) => !prev)
  return (
    <>
      <main className='font- flex flex-col items-center justify-between overflow-hidden bg-[#070707] p-10 text-white'>
        <Navbar />
        <div className='h-14 w-full' />
        {!isReadyToPlay ? (
          <div className='w-10/12 '>
            <ImageCarousel
              onPlayClick={handleReadyToPlay}
              imagesPath={[
                'titlescreen.png',
                'game_tutorial.png',
                'intro.png',
                'middle_ages_intro.png',
                'portal_menu.png',
                'cyberpunk_v.png',
                'ancient_egypt_t.png',
              ]}
              directoryPath='wotw'
            />
          </div>
        ) : (
          <iframe
            style={{
              width: '960px',
              height: '600px',
              borderRadius: '12px',
            }}
            src='https://itch.io/embed-upload/13405236?color=333333'
            width='960'
            height='620'
          >
            <a href='https://nixx-studios.itch.io/way-of-the-warrior'>Play Way of the Warrior on itch.io</a>
          </iframe>
        )}
        <div className='w-full h-14' />
        <div className='md:w-2/5 font-heebo'>
          <ProjectInfoCard
            genre='2D Visual Novel'
            agency='Uni Project'
            technologies={['CSharp', 'Unity', 'Aseprite']}
            description={
              <>
                <p className='text-gray-400 text-sm mt-8 mb-6'>
                  <em>Way of the Warrior</em> is a weird, choice-driven visual novel prototype built in Unity with
                  dynamic story paths, item-based progression, and mini-games.
                </p>
                <p className='text-gray-300 text-sm m-4'>
                  Travel through time in search of your destined partner. Your future child might either doom or save
                  the world. As you repair your malfunctioning time machine, you&apos;ll smuggle &quot;souvenirs&quot;
                  across eras. How will people in the Middle Ages react to cybernetic implants? How will the Bible
                  influence Ancient Egypt?
                </p>
              </>
            }
          />
          <div className='h-6 w-full' />
          <h2 className='text-xl font-bold'>Where did the inspiration come from?</h2>
          <p className='text-gray-300 text-sm leading-relaxed my-4 '>
            This started as a university project with <strong className='text-white'>Sophie Kretschmann</strong>, but
            quickly turned into something much bigger. Instead of relying on existing tools like Ren&apos;Py, we
            developed our own custom visual novel framework tailored to our gameplay needs—with branching stories
            written with{' '}
            <a key={1} href='https://www.inklestudios.com/ink/' target='_blank' rel='noopener noreferrer'>
              <strong>Ink</strong>
            </a>
            , complex item logic, and narrative mini-game. Think <em>Zelda: Breath of the Wild&apos;s</em> &quot;game
            design: one goal, infinite ways to get there&quot; mixed with a dating sim parody.
          </p>
          <h2 className='text-xl font-bold mt-6'>Why not just use Ren&apos;Py?</h2>
          <p className='text-gray-300 text-sm leading-relaxed my-4'>
            While Ren&apos;Py is solid for classic visual novels, it fell short when we wanted create something breaking
            out of the visual novel norm, like non-linear storytelling, interactive item systems and more gameplay
            focused minigames. Building our own framework in Unity gave us total creative control.
          </p>
          <h2 className='text-xl font-bold mt-6'>How can I turn off the music???</h2>
          <p className='leading-relaxed text-gray-200 text-base'>
            I&apos;ll be adding an options menu soon where you can toggle music. Until then, you can lower or mute your
            browser tab manually — thanks for your patience!
          </p>
          <h2 className='text-xl font-bold mt-6 font-'>What’s next?</h2>
          <p className='text-gray-300 text-sm leading-relaxed my-4'>
            <em>Way of the Warrior</em> was originally scoped for mobile, but as the vision grew, so did the platform.
            Now gearing up for a full release on <strong>Steam</strong>, with revamped UI, expanded, mechanics, full
            custom soundtrack, Artist-drawn backgrounds.
          </p>
          <p className='leading-relaxed text-gray-200 text-base'>
            Time travel. Date across dimensions. Break history to fix the future and maybe fall in love...
          </p>
        </div>
      </main>
    </>
  )
}

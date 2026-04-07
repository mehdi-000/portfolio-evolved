'use client'
import { Navbar } from '@/components/Navbar'
import { ProjectInfoCard } from '@/components/ProjectInfoCard'
import { ImageCarousel } from '@/components/ImageCarousel'

export default function Ttsync() {
  const handlePlayClick = () => {
    window.open('https://itch.io/embed-upload/13405385?color=333333', '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <main className='flex flex-col items-center justify-between overflow-hidden p-10 font- bg-[#070707] text-white'>
        <Navbar />
        <div className='h-14 w-full' />
        <div className='w-10/12 '>
          <ImageCarousel
            onPlayClick={handlePlayClick}
            imagesPath={['failed_message.png', 'game.png', 'tutorial.png']}
            directoryPath='ttsync'
          />
        </div>
        <div className='w-full h-14' />
        <div className='font-heebo md:w-2/5'>
          <ProjectInfoCard
            genre='2D Endless Runner'
            agency='Uni Project'
            title='Time Travel Sync'
            technologies={['CSharp', 'Unity', 'Aseprite']}
            description={
              <p>
                <em>Time Travel Sync</em> initially developed while working on a minigame in <em>Way of the Warrior</em>{' '}
                The minigame expanded in complexity and depth. It is a procedurally generated endless runner emphasizing
                on fluid gameplay which has a stronger learning curve then expected.
              </p>
            }
          />
          <div className='h-6 w-full' />
          <h2 className='text-xl font-bold'>Where did the inspiration come from?</h2>
          <p className='my-4 text-sm leading-relaxed text-gray-300'>
            It obviously started as a pac man parody. But perfecting the movement really grew on me. Now I feel like
            depending on the enemy count it might be too difficult as a simple minigame in a visual novel
          </p>
          <h2 className='text-xl font-bold mt-6'>Controls</h2>
          <p className='my-4 text-sm leading-relaxed text-gray-300'>
            <kbd className='text-white'>WASD</kbd> to move, <kbd className='text-white'>Space</kbd> to jump and{' '}
            <kbd className='text-white'>Shift</kbd> to dash.
          </p>
          <h2 className='text-xl font-bold mt-6'>The platforms are too high?</h2>
          <p className='my-4 text-sm leading-relaxed text-gray-300'>
            That&apos;s intentional! You&apos;re meant to use momentum and jump between walls to reach higher areas.{' '}
            <strong>Try not to panic.</strong> It&apos;s all about flow and timing.
          </p>
          <h2 className='text-xl font-bold mt-6'>Dash</h2>
          <p className='my-4 text-sm leading-relaxed text-gray-300'>
            Use dash to burst through enemies or shift your movement mid-air. You can even cancel it with{' '}
            <kbd>Space</kbd> to chain moves or adjust direction, depending on your input at the moment.
          </p>
          <h2 className='text-xl font-bold mt-6'>What&apos;s next?</h2>
          <p className='my-4 text-sm leading-relaxed text-gray-300'>
            Right now, the game might feel a bit too intense for a visual novel setting. I plan to rework it with full
            enemy animations, improved AI, better UX, I think enemy behavior phases — like idle, alert, and attack —
            would really help with the stress factor
          </p>
          <h2 className='text-xl font-bold mt-6'>How can I turn off the music???</h2>
          <p className='text-base leading-relaxed text-gray-200'>
            I&apos;ll be adding an options menu soon where you can toggle music. Until then, you can lower or mute your
            browser tab manually — thanks for your patience!
          </p>
        </div>
      </main>
    </>
  )
}

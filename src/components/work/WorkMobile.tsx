import { WorkCard } from '@/components/work/WorkCardMobile'

export const MobileWork = () => {
  return (
    <>
      <div className='z-10 w-full items-center justify-around lg:flex'>
        <WorkCard
          src='/img/wotw/middle_ages_intro.png'
          title='Way of the Warrior'
          description='Scalable Visual Novel prototype'
          usedTechnology={['Unity', 'CSharp', 'Aseprite']}
          to={'/wotw'}
        />
        <WorkCard
          src='/img/ttsync/game.png'
          title='Time Travel Sync'
          description='Procedurally generated endless runner emphasizing on fluid gameplay'
          usedTechnology={['CSharp', 'Unity', 'Aseprite']}
          to={'/ttsync'}
        />
      </div>
      <div className='z-10 w-full items-center justify-around lg:flex'>
        <WorkCard
          src='/img/cart/cart_render_rfront.png'
          title='Cyberpunk Cart'
          description='Low-poly modeled & rigged Cyberpunk cart'
          usedTechnology={['Blender', 'Cinema4D']}
          to={'/cart'}
        />
        <WorkCard
          src='/img/legacylines/familytree_dark.png'
          title='Legacy Lines'
          description='Fullstack visual database for Family trees'
          usedTechnology={['VueJs', 'Prisma', 'NodeJs', 'MySQL']}
          to={'/legacylines'}
        />
      </div>
    </>
  )
}

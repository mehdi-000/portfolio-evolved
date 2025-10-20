import { WorkCard } from '@/components/work/WorkCard'

export const Work = () => (
  <>
    <div className='z-10 w-full items-center justify-around lg:flex'>
      <WorkCard
        model='WotwModel'
        title='Way of the Warrior'
        description='Scalable Visual Novel prototype'
        usedTechnology={['Unity', 'CSharp', 'Aseprite']}
        to={'/wotw'}
      />
      <WorkCard
        model='PlayerModel'
        title='Time Travel Sync'
        description='Procedurally generated endless runner emphasizing on fluid gameplay'
        usedTechnology={['CSharp', 'Unity', 'Aseprite']}
        to={'/ttsync'}
      />
    </div>
    <div className='z-10 w-full items-center justify-around lg:flex'>
      <WorkCard
        model='Cart'
        title='Cyberpunk Cart'
        description='Low-poly modeled & rigged Cyberpunk cart'
        usedTechnology={['Blender', 'Cinema4D']}
        to={'/cart'}
      />
      <WorkCard
        model='LegacyLinesModel'
        title='Legacy Lines'
        description='Fullstack visual database for Family trees'
        usedTechnology={['VueJs', 'Prisma', 'NodeJs', 'MySQL']}
        to={'/legacylines'}
      />
    </div>
  </>
)

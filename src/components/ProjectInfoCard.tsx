import { UsedTechList, TechName } from '@/components/UsedTechList'

interface ProjectInfoCardProps {
  genre: string
  agency: string
  title?: string
  technologies: TechName[]
  description: React.ReactNode
}

export function ProjectInfoCard({ genre, agency, title, technologies, description }: ProjectInfoCardProps) {
  return (
    <div className='pb-6 pt-4 px-6 rounded-xl bg-gradient-to-br from-purple-800/5 to-cyan-400/5 border-2 border-pink/5 shadow-md'>
      <div className='flex justify-between text-sm text-gray-400'>
        <p>
          <strong className='text-gray-500'>{genre}</strong>
        </p>
        <p>
          <strong className='text-gray-500'>Agency:</strong> {agency}
        </p>
      </div>
      {title && (
        <div className='flex items-center gap-3 pt-2'>
          <h1 className='text-2xl font-bold text-white'>{title}</h1>
        </div>
      )}
      <UsedTechList technologies={technologies} />
      <div className='mb-2 mt-9 text-sm text-gray-400'>{description}</div>
    </div>
  )
}

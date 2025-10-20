import { FaReact, FaNodeJs } from 'react-icons/fa'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'
import { FaVuejs } from 'react-icons/fa6'
import { FaUnity } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { PiFileCSharp } from 'react-icons/pi'
import { SiBlender, SiCinema4D, SiPrisma, SiAseprite, SiAdobeillustrator } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

export const techIcons = {
  NextJs: <TbBrandNextjs />,
  React: <FaReact />,
  TypeScript: <TbBrandTypescript />,
  NodeJs: <FaNodeJs />,
  VueJs: <FaVuejs />,
  Unity: <FaUnity />,
  TailwindCSS: <RiTailwindCssFill />,
  CSharp: <PiFileCSharp />,
  Blender: <SiBlender />,
  Cinema4D: <SiCinema4D />,
  Prisma: <SiPrisma />,
  Aseprite: <SiAseprite />,
  MySQL: <GrMysql />,
  Illustrator: <SiAdobeillustrator />,
} as const

export const groupedTechIcons = {
  Frontend: {
    NextJs: <TbBrandNextjs />,
    React: <FaReact />,
    TypeScript: <TbBrandTypescript />,
    VueJs: <FaVuejs />,
    TailwindCSS: <RiTailwindCssFill />,
  },
  Backend: {
    NodeJs: <FaNodeJs />,
    Prisma: <SiPrisma />,
    MySQL: <GrMysql />,
    CSharp: <PiFileCSharp />,
  },
  Tools: {
    Unity: <FaUnity />,
    Blender: <SiBlender />,
    Cinema4D: <SiCinema4D />,
    Aseprite: <SiAseprite />,
    Illustrator: <SiAdobeillustrator />,
  },
}

export type TechName = keyof typeof techIcons

interface UsedTechListProps {
  technologies: TechName[]
}

export const UsedTechList: React.FC<UsedTechListProps> = ({ technologies }) => {
  return (
    <div className='grid grid-cols-2 gap-4 md:flex md:justify-around w-5/6 transition-transform duration-500 ease-in-out translate-y-4 group-hover:translate-y-2'>
      {technologies.map((tech) => (
        <span
          key={tech}
          className='flex items-center gap-2 border border-gray-400 px-2 py-1 rounded-md text-xs sm:text-sm justify-center w-full font-heebo'
        >
          {techIcons[tech] || <div />} {tech}
        </span>
      ))}
    </div>
  )
}

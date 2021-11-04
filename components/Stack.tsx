import { CubeIcon } from '@heroicons/react/outline'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTypescript, SiMongodb } from 'react-icons/si'

interface ITech {
  logo: JSX.Element
  title: string
}

export default function Stack() {
  const stackData: ITech[] = [
    {
      logo: <FaReact className='h-9 w-9' />,
      title: 'ReactJS',
    },
    {
      logo: <FaNodeJs className='h-9 w-9' />,
      title: 'NodeJS',
    },
    {
      logo: <SiMongodb className='h-9 w-9' />,
      title: 'MongoDB',
    },
    {
      logo: <SiTypescript className='h-9 w-9' />,
      title: 'TypeScript',
    },
  ]

  return (
    <section
      id='stack'
      className='py-44'
      style={{ backgroundColor: '#1c1d1f' }}>
      <section className='cstm-container text-white'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold max-w-2xl mx-auto mb-8'>
            Ma stack technique / outils utilisés
          </h2>
          {/* <h3 className="text-2xl text-opacity">Réalisés par mes soins.</h3> */}
        </div>

        <section
          style={{ backgroundColor: '#27282b', borderColor: '#29292c' }}
          className={`grid grid-cols-4 text-white rounded-xl divide-x-2 divide-gray-500 divide-opacity-25 shadow-xl`}>
          {stackData.map((stack, index) => (
            <div key={index} className='p-8'>
              <div className='flex flex-col space-y-2 items-center justify-center'>
                {stack.logo}
                <p className='text-lg'>{stack.title}</p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </section>
  )
}

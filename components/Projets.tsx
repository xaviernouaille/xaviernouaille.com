import { FolderIcon } from '@heroicons/react/outline'
import DB from '../public/DB.json'
import { IProjet } from '../pages/projet/[index]'
import Link from 'next/link'

export default function Projets() {
  return (
    <section
      id='projets'
      style={{ backgroundColor: '#1c1d1f' }}
      className='section text-white'>
      <section className='cstm-container'>
        <div className='text-center mb-16'>
          <h2 className='seconde-title font-bold max-w-2xl mx-auto mb-8'>
            Projets réalisés durant mon temps libre.
          </h2>
        </div>

        <section className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-5 text-white px-12'>
          {DB.projets.map((projet: IProjet, index: number) => (
            <Link
              scroll={false}
              key={index}
              href='/projet/[index]'
              as={`/projet/${index}`}>
              <a
                className='p-10 rounded-lg shadow-xl flex flex-col justify-between'
                style={{ backgroundColor: '#27282b' }}>
                <div>
                  <FolderIcon className='h-7 w-7 secondary mb-5' />
                  <h3 className='text-xl mb-3 font-medium'>{projet.title}</h3>
                  <p className='text-opacity text-lg'>
                    {projet.description.substr(0, 50)}..
                  </p>
                </div>

                <p className='mt-10 text-sm'>{projet.stack.join(', ')}</p>
              </a>
            </Link>
          ))}
        </section>
      </section>
    </section>
  )
}

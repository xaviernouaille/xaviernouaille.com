import { HiOutlineFolder } from 'react-icons/hi'
import DB from '../public/DB.json'
import { IProjet } from '../pages/projet/[index]'
import Link from 'next/link'

export default function Projets() {
  return (
    <section
      id='projets'
      className='section text-white bg-tertiary'>
      <section className='cstm-container'>
        <div className='text-center mb-16'>
          <h2 className='seconde-title font-bold max-w-2xl mx-auto mb-8'>
            Projets réalisés durant mon temps libre.
          </h2>
        </div>

        <section className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-7 text-white lg:px-12'>
          {DB.projets.map((projet: IProjet, index: number) => (
            <Link
              scroll={false}
              key={index}
              href='/projet/[index]'
              as={`/projet/${index}`}>
              <a
                className='px-7 py-11 rounded-md shadow-xl flex flex-col justify-between bg-fourth'>
                <div>
                  <HiOutlineFolder className='h-8 w-8 secondary mb-10' />
                  <h3 className='text-xl mb-3 font-medium'>{projet.title}</h3>
                  <p className='text-opacity text-base leading-relaxed overflow-hidden h-28'>
                    {projet.description.substr(0, 100)}...
                  </p>
                </div>

                <p className='mt-10 text-opacity text-sm'>{projet.stack.join('   ')}</p>
              </a>
            </Link>
          ))}
        </section>
      </section>
    </section>
  )
}

import { ReactElement } from 'react'
import DB from '../public/DB.json'

const Experiences = (): ReactElement => {
  const experiences = DB.experiences
  return (
    <section
      id='experiences'
      className='text-t-primary container-center section flex flex-col'>
      <div className='mb-14'>
        <h2>Expériences</h2>
      </div>
      <div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-16'>
          {experiences.map((exp, index: number) => (
            <div className='' key={index}>
              <p className='mb-5 uppercase text-white font-semibold text-xl'>{`${exp.date} - ${exp.intitule}`}</p>
              <p className='text-lg opacity-50'>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experiences

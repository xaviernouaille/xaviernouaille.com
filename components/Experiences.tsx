import { ReactElement } from 'react'
import DB from '../public/DB.json'

const Experiences = (): ReactElement=> {
  const experiences = DB.experiences

  return (
    <section id='experiences' className='text-t-primary cstm-container section'>
      <h2 className='h2 mb-20 md:mb-32'>Expériences</h2>
      <section className='grid grid-cols-1 lg:grid-cols-2 grid-flow-row text-primary gap-28'>
        {experiences.map((exp, index: number) => (
          <div key={index}>
            <h3 className='h3 mb-5'>
              {exp.intitule} ({exp.date})
            </h3>
            <p className='text-t-secondary'>{exp.description}</p>
          </div>
        ))}
      </section>
    </section>
  )
}

export default Experiences
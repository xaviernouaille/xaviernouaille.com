import { ReactElement } from 'react'
import DB from '../public/DB.json'

const Experiences = (): ReactElement => {
  const experiences = DB.experiences

  return (
    <section id='experiences' className='text-t-primary cstm-container section relative flex flex-col lg:flex-row lg:space-x-28'>
      <div className="lg:sticky lg:top-28 h-fit">
        <h2 className='h2 mb-20 lg:mb-0'>Expériences</h2>
      </div>
      <section className='grid grid-cols-1 grid-flow-row text-primary gap-28 md:pr-20'>
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
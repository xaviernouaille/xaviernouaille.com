import { ArrowRight } from 'react-feather'

export default function Contact() {
  return (
    <section id='contact' className='section big-section text-white'>
      <section className='cstm-container text-center'>
        <h2 className='seconde-title font-bold max-w-2xl mx-auto mb-8'>
          Contactez moi pour plus d'information
        </h2>
        <h3 className='text-lg md:text-xl max-w-2xl text-opacity mx-auto mb-12'>
          Pour toutes demandes d'informations, vous pouvez prendre contact avec
          moi !
        </h3>
        <a
          href='mailto:xavier.nouaille@protonmail.com'
          className='big-btn inline-flex items-center space-x-2 bg-secondary'>
          <p>Contact</p>
          <ArrowRight className='h-5 w-5 md:w-6 md:h-6' />
        </a>
      </section>
    </section>
  )
}

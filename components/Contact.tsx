import { FiArrowRight } from "react-icons/fi"

export default function Contact() {
  return (
    <section id='contact' className='py-44 text-white'>
      <section className='cstm-container text-center'>
        <h2 className='text-5xl font-bold max-w-2xl mx-auto mb-8'>
          Contactez moi pour plus d'information
        </h2>
        <h3 className='text-xl max-w-2xl text-opacity mx-auto mb-12'>
          Pour toutes demandes d'informations, vous pouvez prendre contact avec
          moi !
        </h3>
        <a
          href='mailto:xavier.nouaille@protonmail.com'
          className='py-3 px-10 rounded-lg bg-secondary font-medium text-lg inline-flex items-center space-x-2'>
          <p>Contact</p><FiArrowRight className="h-6 w-6" />
        </a>
      </section>
    </section>
  )
}

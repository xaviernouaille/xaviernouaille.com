import XavierNouaille from '../public/xavier-nouaille.webp'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export default function Info() {
  return (
    <section id='a-propos' className='section cstm-container text-white'>
      <h2 className='seconde-title text-white mb-10 font-bold'>A mon propos</h2>

      <p className='md:text-xl leading-normal text-opacity mb-5'>
        <i>Interressé</i> par les nouvelles technologies, j'ai débuté début
        2019, un Bachelor chef de projets digitaux. Inscrit pour la rentrée
        2022, au campus d'Epitech Kremlin Bicêtre, je debuterai un MASTER en
        alternance.
      </p>
      <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-12'>
        <div className='lg:w-3/5 w-full'>
          <p className='md:text-xl leading-normal mt-5 text-opacity'>
            Passionné d’informatique, j’ai appris à coder dans divers langages
            tel que PHP, JavaScript ou encore TypeScript. Polyvalent, je
            maîtrise les différentes étapes techniques de la création d’un site
            ou d’une application web ; de la compréhension des besoins
            utilisateurs, au développement du produit final.
          </p>
          <div className='mt-10'>
            <a
              className='text-lg secondary flex items-center space-x-2'
              href='/CV-XAVIER-NOUAILLE.pdf'
              target='_blank'>
              <p>Curriculum Vitae</p>
              <FiArrowRight className='h-5 w-5 md:w-6 md:h-6 animate-pulse' />
            </a>
          </div>
        </div>
        <div className='lg:w-2/5 w-full'>
          <Image
            className='rounded-xl'
            src={XavierNouaille.src}
            alt='Xavier-Nouaille'
            width={785}
            height={750}
            layout='responsive'
          />
        </div>
      </div>
    </section>
  )
}

import XavierNouaille from '../public/xavier-nouaille.webp'
import { FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

export default function Info() {
  return (
    <section id='a-propos' className='section cstm-container text-white'>
      <h2 className='seconde-title text-white mb-10 font-bold'>A mon propos</h2>

      <p className='md:text-xl leading-normal text-opacity'>
        <i>Interressé</i> par les nouvelles technologies, j'ai débuté début
        2019, un Bachelor chef de projets digitaux. J'ai pour ambition de
        poursuivre mon apprentissage avec un Master en alternance après
        l'obtention de mon Bachelor.
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
              <p>Mon CV</p>
            </a>
          </div>
        </div>
        <div className="lg:w-2/5 w-full">
        <Image
        className='rounded-xl'
        src={XavierNouaille.src}
        alt='Xavier Nouaille'
        width={785}
        height={750}
        layout="responsive"
        />
        </div>
      </div>
    </section>
  )
}

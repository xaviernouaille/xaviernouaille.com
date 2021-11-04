import XavierNouaille from '../public/xavier-nouaille.jpg'
import {FiArrowRight} from 'react-icons/fi'

export default function Info() {
  return (
    <section id='a-propos' className='pb-44 pt-32 cstm-container text-white'>
      <h2 className='text-5xl text-white mb-10 font-bold'>A mon propos</h2>
      <p className='text-xl leading-normal text-opacity'>
        <i>Interressé</i> par les nouvelles technologies, j'ai débuté début
        2019, un Bachelor chef de projets digitaux. J'ai pour ambition de
        poursuivre mon apprentissage avec un Master en alternance après
        l'obtention de mon Bachelor.{' '}
      </p>
      <div className='flex space-x-12'>
        <div className='w-3/5'>
          <p className='text-xl leading-normal mt-5 text-opacity'>
            Passionné d’informatique, j’ai appris à coder dans divers langages
            tel que PHP, JavaScript ou encore TypeScript. Polyvalent, je
            maîtrise les différentes étapes techniques de la création d’un site
            ou d’une application web ; de la compréhension des besoins
            utilisateurs, au développement du produit final.{' '}
          </p>
          <div className='mt-10'>
            <a className='text-lg secondary flex items-center space-x-2' href=''>
              <p>Mon CV</p> <FiArrowRight className="h-6 w-6" />
            </a>
          </div>
        </div>
        <img
          className='w-2/5 rounded-xl'
          src={XavierNouaille.src}
          alt="Xavier Nouaille"
        />
      </div>
    </section>
  )
}

import XavierNouaille from '../public/xavier-nouaille.webp'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export default function Info() {
  return (
    <section id='a-propos' className='section cstm-container text-white'>
      <h2 className='seconde-title text-white mb-10 font-bold'>A mon propos</h2>

      <section className='grid grid-cols-1 lg:grid-cols-5 gap-8'>
        <p className='md:text-xl leading-normal text-opacity lg:col-span-5'>
          Passionné d’informatique, j’ai appris à coder dans divers langages tel
          que PHP, JavaScript ou encore TypeScript. Polyvalent, je maîtrise les
          différentes étapes techniques de la création d’un site ou d’une
          application web ; de la compréhension des besoins utilisateurs, au
          développement du produit final.
        </p>

        <div className='lg:col-span-3'>
          <p className='md:text-xl leading-normal text-opacity'>
            Pour ce qui est de mon parcours, j'ai débuté début 2019, un Bachelor
            chef de projets digitaux. Inscrit pour la rentrée 2022, au campus
            d'Epitech Kremlin Bicêtre, je débuterai un MASTER en alternance.
            <br />
            <br />
            Pour la réalisation de mes projets, j'utilise principalement la MERN stack (MongoDB, ExpressJS, React,
            NodeJS). Je développe
            la grande majorité de mes projets avec NextJS pour améliorer le référencement de
            ceux-ci. Tous mes projets sont développés en TypeScript ce qui me
            permet de typer facilement mes variables, de maintenir mon code plus
            facilement, et ainsi gagner du temps de développement.
          </p>
          <a
            className='inline-flex items-center space-x-2 mt-10 btn text-secondary border border-secondary'
            href='/CV-XAVIER-NOUAILLE.pdf'
            target='_blank'>
            <p>Curriculum Vitae</p>
            <FiArrowRight className='h-5 w-5 md:w-6 md:h-6 animate-pulse' />
          </a>
        </div>

        <figure className='lg:col-span-2'>
          <Image
            className='rounded-2xl'
            src={XavierNouaille.src}
            alt='Xavier-Nouaille'
            width={785}
            height={750}
            layout='responsive'
          />
        </figure>
      </section>
    </section>
  )
}

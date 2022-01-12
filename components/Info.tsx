import XavierNouaille from '../public/xavier-nouaille.webp'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export default function Info() {
  return (
    <section id='a-propos' className='section cstm-container text-white'>
      <section className='flex flex-col lg:flex-row lg:space-x-24 space-x-0 space-y-20 lg:space-y-0'>
        <div className='lg:w-3/5 w-full pr-8 lg:pr-20'>
          <p className='leading-relaxed md:text-lg lg:col-span-5 text-t-secondary font-medium'>
            <span className='text-t-primary'>Passionné d’informatique,</span>{' '}
            j’ai appris à coder dans divers langages tel que{' '}
            <span className='text-t-primary'>PHP, JavaScript</span> ou encore{' '}
            <span className='text-t-primary'>TypeScript</span>. Polyvalent, je
            maîtrise les différentes étapes techniques de la{' '}
            <span className='text-t-primary'>création d’un site </span>
            ou d’une <span className='text-t-primary'>application web</span> ;
            de la{' '}
            <span className='text-t-primary'>compréhension des besoins </span>
            utilisateurs, au développement du produit final.
            <br />
            <br />
            Pour ce qui est de mon parcours, j'ai débuté début 2019, un{' '}
            <span className='text-t-primary'>
              Bachelor chef de projets digitaux.
            </span>{' '}
            Inscrit pour la rentrée 2022, au campus
            <span className='text-t-primary'> d'Epitech</span> Kremlin Bicêtre,
            je débuterai un{' '}
            <span className='text-t-primary'>MASTER en alternance.</span>
            <br />
            <br />
            Pour la réalisation de mes projets, j'utilise principalement la{' '}
            <span className='text-t-primary'>MERN </span>
            stack (MongoDB, ExpressJS, React, NodeJS). Je développe la grande
            majorité de mes projets avec{' '}
            <span className='text-t-primary'>NextJS</span> pour améliorer le
            référencement de ceux-ci. Tous mes projets sont développés en{' '}
            <span className='text-t-primary'>TypeScript</span> ce qui me permet
            de typer facilement mes variables, de maintenir mon code plus
            facilement, et ainsi gagner du temps de développement.
          </p>
          <a
            className='inline-flex items-center space-x-2 mt-10 btn  bg-secondary text-white'
            href='/CV-XAVIER-NOUAILLE.pdf'
            target='_blank'>
            <p>Curriculum Vitae</p>
            <FiArrowRight className='h-5 w-5 md:w-6 md:h-6 animate-pulse' />
          </a>
        </div>

        <figure className='lg:w-2/5 w-full'>
          <Image
            className='rounded-2xl'
            src={XavierNouaille.src}
            alt='Xavier-Nouaille'
            width={500}
            height={470}
            layout='responsive'
          />
        </figure>
      </section>
    </section>
  )
}

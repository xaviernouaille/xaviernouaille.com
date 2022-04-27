import Image from 'next/image'
import { HiChevronRight } from 'react-icons/hi'
import { ReactElement } from 'react'

const Info = (): ReactElement => {
  return (
    <section id='a-propos' className='section container-center text-white'>
      <section className='flex flex-col lg:flex-row space-x-0 space-y-20 lg:space-y-0'>
        <figure className='lg:w-2/5 w-full'>
          {/* <Image
            src={'/xn.jpg'}
            alt='Xavier Nouaille'
            width={'100%'}
            height={'100%'}
            objectFit='cover'
            layout='responsive'
          /> */}
          <img className='w-full h-full object-cover' src='/xn.jpg' alt='' />
        </figure>
        <div className='lg:w-3/5 w-full lg:pr-20 lg:pl-24'>
          <h2 className='mb-8 text-w-2'>A propos</h2>
          <p className='leading-relaxed text-lg lg:col-span-5 opacity-50 text-tertiary'>
            <span>Passionné d’informatique,</span> j’ai appris à coder dans
            divers langages tels que <span>PHP, JavaScript</span> ou encore{' '}
            <span>TypeScript</span>. Polyvalent, je maîtrise les différentes
            étapes techniques de la <span>création d’un site </span>
            ou d’une <span>application web</span> ; de la{' '}
            <span>compréhension des besoins </span>
            utilisateurs, au développement du produit final.
            <br />
            <br />
            Pour ce qui est de mon parcours, j'ai débuté début 2019, un{' '}
            <span>Bachelor chef de projets digitaux.</span> Inscrit pour la
            rentrée 2022, au campus
            <span> d'Epitech</span> Kremlin Bicêtre, je débuterai un{' '}
            <span>MASTER en alternance.</span>
            <br />
            <br />
            Pour la réalisation de mes projets, j'utilise principalement la{' '}
            <span>MERN </span>
            stack (MongoDB, ExpressJS, React, NodeJS). Je développe la grande
            majorité de mes projets avec <span>NextJS</span> pour améliorer le
            référencement de ceux-ci. Tous mes projets sont développés en{' '}
            <span>TypeScript</span> ce qui me permet de typer facilement mes
            variables, de maintenir mon code plus facilement, et ainsi gagner du
            temps de développement.
          </p>
          <a
            className='inline-flex items-center space-x-1 mt-10 btn bg-green-300 text-black'
            href='/CV-XAVIER-NOUAILLE.pdf'
            target='_blank'>
            Curriculum Vitae
            <HiChevronRight className='h-5 w-5 md:w-6 md:h-6 animate-pulse' />
          </a>
        </div>
      </section>
    </section>
  )
}

export default Info

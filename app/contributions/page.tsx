import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description:
    'Les projets sur lesquels j’ai travaillé ces dernières années 👷',
};

const Page = () => {
  return (
    <div className='py-6 prose dark:prose-invert mt-10'>
      <h1 className='mb-2'>Contributions</h1>
      <p className='text-md font-mono my-4 text-slate-700 dark:text-slate-200 md:mr-20 opacity-70'>
        Les projets sur lesquels j{"'"}ai travaillé ces dernières années{' '}
        <span className='text-xl'>👷</span>
      </p>
      <hr className='my-4' />

      <div className='flex flex-col space-y-20 mt-12 mb-32 px-3'>
        <div>
          <div
            className='h-64 bg-cover bg-center rounded-lg shadow-md'
            style={{ backgroundImage: 'url(/orizons.png)' }}
          ></div>
          <div className='flex justify-between items-center'>
            <h3 className='mt-6 font-extrabold text-2xl'>Orizons</h3>
            <a
              referrerPolicy='no-referrer'
              target='_blank'
              href='https://orizons.io/'
            >
              <img className='h-6 w-6 m-0' src='/link.png' />
            </a>
          </div>
          <div className='flex flex-col space-y-1'>
            <p className='my-0'>2024</p>
            <div className='px-2'>
              <p className='font-mono text-sm opacity-70'>
                Pour les professionnels et particuliers, Orizons simplifie et
                digitalise vos prestations d{"'"}efficacité énergétique pour un
                avenir durable.
              </p>
              <ul className='font-mono text-sm'>
                <li>
                  Implémentation d{"'"}un systeme d{"'"}authentification avec
                  Firebase
                </li>
                <li>Gestion de formulaires</li>
                <li>Style avec TailwindCSS</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div
            className='h-64 bg-cover bg-center rounded-lg shadow-md'
            style={{ backgroundImage: 'url(/keeze.png)' }}
          ></div>
          <div className='flex justify-between items-center'>
            <h3 className='mt-6 font-extrabold text-2xl'>Keeze</h3>
            <a
              referrerPolicy='no-referrer'
              target='_blank'
              href='https://keeze.co/'
            >
              <img className='h-6 w-6 m-0' src='/link.png' />
            </a>
          </div>
          <div className='flex flex-col space-y-1'>
            <p className='my-0'>2024</p>
            <div className='px-2'>
              <p className='font-mono text-sm opacity-70'>
                Idéalement situés au cœur de Paris, nos espaces vous permettront
                d{"'"}organiser toutes vos réunions, séminaires, formations,
                showroom, cocktail
              </p>
              <ul className='font-mono text-sm'>
                <li>Implémentation de landing page</li>
                <li>Refacto de code</li>
                <li>Style CSSinJS</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div
            className='h-64 bg-cover bg-center rounded-lg shadow-md'
            style={{
              backgroundImage:
                'url(https://www.axialys.com/wp-content/uploads/2023/11/logo_partners-dialonce.png)',
            }}
          ></div>
          <div className='flex justify-between items-center'>
            <h3 className='mt-6 font-extrabold text-2xl'>DialOnce</h3>
            <a
              referrerPolicy='no-referrer'
              target='_blank'
              href='https://dial-once.com/'
            >
              <img className='h-6 w-6 m-0' src='/link.png' />
            </a>
          </div>
          <div className='flex flex-col space-y-1'>
            <p className='my-0'>2022 - 2024</p>
            <div className='px-2'>
              <p className='font-mono text-sm opacity-70'>
                Editeur de logiciel SaaS spécialisé dans l{"'"}IA pour la
                relation client, DialOnce, à travers son Bot omnicanal,
                orchestre les parcours de contacts
              </p>
              <ul className='font-mono text-sm'>
                <li>Développement de feature fullstack</li>
                <li>Refacto de code</li>
                <li>Maintenance de la codebase existante</li>
                <li>CI/CD, IAC avec Terraform & Pulumi</li>
                <li>Administration de cluster K8S (k9s, argocd)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div
            className='h-64 bg-cover bg-center rounded-lg shadow-md'
            style={{ backgroundImage: 'url(/offeaze.png)' }}
          ></div>
          <div className='flex justify-between items-center'>
            <h3 className='mt-6 font-extrabold text-2xl'>Offeaze (fermé)</h3>
            <img className='h-6 w-6 m-0 opacity-30' src='/link.png' />
          </div>
          <div className='flex flex-col space-y-1'>
            <p className='my-0'>2022</p>
            <div className='px-2'>
              <p className='font-mono text-sm opacity-70'>
                Location d{"'"}espaces de travail pour les professionnels,
                bureaux privés, salles de réunion, postes de travail en
                coworking
              </p>
              <ul className='font-mono text-sm'>
                <li>Développement de features full-stack</li>
                <li>Google Maps / Stripe APIs</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className='font-extrabold mt-12'>🧑‍💻 Disponible en freelance</h2>
    </div>
  );
};

export default Page;

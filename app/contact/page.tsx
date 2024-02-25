import { Metadata } from 'next';
import { DataCounter } from '@/components/date-counter';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description: `Contact | Un projet, une question ? N'hésitez pas à me contacter, je vous ferai part de ma réponse dans les plus brefs délais.`,
};

const Page = () => {
  return (
    <div className='mt-24 md:mt-28'>
      <h1 className='mb-2'>Contact</h1>
      <p className='text-md  my-4  mr-20'>
        Un projet, une question ? N{"'"}hésitez pas à me contacter, je vous
        ferai part de ma réponse dans les plus brefs délais.
        <br />
        <br />
        Merci :-)
      </p>

      <div className='mt-16'>
        {/* <div className='flex items-center gap-20'>
          <div>
            <h3 className='font-extrabold mb-0 pb-0'>
              Contactez moi par email :
            </h3>
            <a
              href='mailto:xavier.nouaille@protonmail.com'
              className='cursor-pointer font-medium'
            >
              <p className='highlight mt-2 small'>
                xavier.nouaille@protonmail.com
              </p>
            </a>
          </div>
          <div>
            <h3 className='font-extrabold mb-0 pb-0'>
              Contactez moi sur Linkedin :
            </h3>
            <a
              href='mailto:xavier.nouaille@protonmail.com'
              className='cursor-pointer font-medium'
            >
              <p className='highlight mt-2 small'>Xavier Nouaille</p>
            </a>
          </div>
        </div> */}

        <div className='flex flex-col gap-5'>
          <div className='w-full'>
            {/* <h3 className='font-extrabold mb-0 pb-0'>
              Contactez moi par email :
            </h3> */}
            <a
              href='mailto:xavier.nouaille@protonmail.com'
              className='cursor-pointer font-medium'
            >
              <h3 className='pb-0'>Mail:</h3>
              <p className='highlight mt-2 small'>
                xavier.nouaille@protonmail.com
              </p>
            </a>
          </div>
          <div className='w-full'>
            {/* <h3 className='font-extrabold mb-0 pb-0'>
              Contactez moi sur Linkedin :
            </h3> */}
            <h3 className='pb-0'>Linkedin:</h3>

            <a
              href='mailto:xavier.nouaille@protonmail.com'
              className='cursor-pointer font-medium'
            >
              <p className='highlight mt-2 small'>Xavier Nouaille</p>
            </a>
          </div>
          <div className='w-full'>
            {/* <h3 className='font-extrabold mb-0 pb-0'>
              Contactez moi sur Linkedin :
            </h3> */}
            <h3 className='pb-0'>GitHub:</h3>

            <a
              href='mailto:xavier.nouaille@protonmail.com'
              className='cursor-pointer font-medium'
            >
              <p className='highlight mt-2 small'>@xaviernouaille</p>
            </a>
          </div>
        </div>

        <DataCounter />
      </div>
    </div>
  );
};

export default Page;

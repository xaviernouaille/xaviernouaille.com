import { Metadata } from 'next';
import { DataCounter } from '@/components/date-counter';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description: `Contact | Un projet, une question ? N'hésitez pas à me contacter, je vous ferai part de ma réponse dans les plus brefs délais.`,
};

const Page = () => {
  return (
    <div className='mt-28'>
      <h1 className='mb-2'>Contact</h1>
      <p className='text-md  my-4  mr-20'>
        Un projet, une question ? N{"'"}hésitez pas à me contacter, je vous
        ferai part de ma réponse dans les plus brefs délais.
        <br />
        <br />
        Merci :-)
      </p>

      <div className='mt-20'>
        <h3 className='font-extrabold mb-0 pb-0'>Contactez moi par email :</h3>
        <a
          href='mailto:xavier.nouaille@protonmail.com'
          className='cursor-pointer font-medium'
        >
          <p className='highlight mt-2'>xavier.nouaille@protonmail.com</p>
        </a>

        <h3 className='font-extrabold mb-0 pb-0 mt-5'>
          Contactez moi sur Linkedin :
        </h3>
        <a
          href='mailto:xavier.nouaille@protonmail.com'
          className='cursor-pointer font-medium'
        >
          <p className='highlight mt-2'>Xavier Nouaille</p>
        </a>

        <DataCounter />
      </div>
    </div>
  );
};

export default Page;

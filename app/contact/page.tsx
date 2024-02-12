import { Metadata } from 'next';
import { DataCounter } from '@/components/date-counter';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description: `Contact | Un projet, une question ? N'hésitez pas à me contacter, je vous ferai part de ma réponse dans les plus brefs délais.`,
};

const Page = () => {
  return (
    <div className='py-6 prose dark:prose-invert mt-10'>
      <h1 className='mb-2'>Contact</h1>
      <p className='text-md font-mono my-4 text-slate-700 dark:text-slate-200 mr-20 opacity-70'>
        Un projet, une question ? N{"'"}hésitez pas à me contacter, je vous
        ferai part de ma réponse dans les plus brefs délais.
      </p>
      <hr className='my-4' />
      <div className='mt-20'>
        <h3 className='font-extrabold'>Contactez moi par email :</h3>
        <a
          href='mailto:xavier.nouaille@protonmail.com'
          className='font-mono italic text-sm hover:underline cursor-pointer'
        >
          xavier.nouaille@protonmail.com
        </a>

        <DataCounter />
      </div>
    </div>
  );
};

export default Page;

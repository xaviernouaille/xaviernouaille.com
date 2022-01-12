import { FaArrowRight } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      id='contact'
      className='pt-28 md:pt-32 md:pb-10 text-white mb-0'>
      <section
      className="relative lg:py-28 p-10 lg:px-0 rounded-xl lg:rounded-none"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3705846/pexels-photo-3705846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
          <div className="absolute inset-0 h-full w-full bg-black bg-opacity-50 z-1">

          </div>
        <section className='cstm-container flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-5 lg:space-y-0 relative z-3'>
          <div>
            <h2 className="cstm-h2">Contactez-moi!</h2>
          </div>
          <div className='lg:mr-16'>
            <a href={`mailto:${process.env.NEXT_PUBLIC_ADDRESSMAIL}`} className='big-btn bg-secondary'>contact</a>
          </div>
        </section>
      </section>
    </section>
  )
}

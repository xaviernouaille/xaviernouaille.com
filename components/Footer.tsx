import Logo from './Logo'

export default function Footer() {
  return (
    <footer className='mt-5'>
      <hr className='border-t border-opacity' />
      <div className='py-8 cstm-container flex justify-between items-center text-white'>
        <div>
          <p className='text-sm text-opacity'>
            Designé et développé par Xavier Nouaille
          </p>
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </footer>
  )
}

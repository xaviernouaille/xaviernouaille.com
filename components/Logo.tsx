import Link from 'next/link'

export default function Logo() {
  return (
    <Link scroll={false} href='/#hero'>
      <a
        style={{ fontSize: '1.5rem' }}
        aria-label='Logo Xavier Nouaille'
        className='font-medium font-logo'>
        XN
      </a>
    </Link>
  )
}

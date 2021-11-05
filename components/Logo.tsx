import Link from 'next/link'

export default function Logo() {
  return (
    <Link scroll={false} href='/#hero'>
      <a style={{ fontSize: '1.5rem' }} className='font-medium font-logo'>
        XN
      </a>
    </Link>
  )
}

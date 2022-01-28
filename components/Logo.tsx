import Link from 'next/link'
import { ReactElement } from 'react'

interface IProps{
  className?: string
}

const Logo = ({className = ""}: IProps): ReactElement => {
  return (
    <Link scroll={false} href='/#hero'>
      <a
        aria-label='Logo Xavier Nouaille'
        className={`${className} font-medium font-logo text-t-primary w-fit`}>
        XN
      </a>
    </Link>
  )
}

export default Logo

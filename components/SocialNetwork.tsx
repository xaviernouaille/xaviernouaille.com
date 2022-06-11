import Link from 'next/link'
import { FC } from 'react'
import DB from '../public/DB.json'

const SocialNetwork: FC = () => {
  const { socialNetworks } = DB

  return (
    <div className='container-center flex space-x-7 justify-center'>
      {socialNetworks.map(({ title, url }) => (
        <div>
          <Link href={url}>
            <a className='text-white text-lg underline'>{title}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default SocialNetwork

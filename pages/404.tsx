import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { BiMessageSquareError } from 'react-icons/bi'

export default function notFound404() {
  const [counter, setCounter] = useState<number>(6),
    router = useRouter()

  useEffect(() => {
    counter > 0
      ? setTimeout(() => setCounter(counter - 1), 1000)
      : router.push('/')
  }, [counter])

  return (
    <section className='h-screen text-white flex flex-col space-y-5 justify-center items-center'>
      <div className='relative'>
        <h1 className='leading-tight'>404</h1>
      </div>
      <p className='text-lg'>Redirection vers l'accueil dans {counter} s</p>
      <div className='flex space-x-5 text-xl'>
        <span style={{ animationDelay: '125ms' }} className='animate-bounce'>
          .
        </span>
        <span style={{ animationDelay: '250ms' }} className='animate-bounce'>
          .
        </span>
        <span style={{ animationDelay: '375ms' }} className='animate-bounce'>
          .
        </span>
      </div>
    </section>
  )
}

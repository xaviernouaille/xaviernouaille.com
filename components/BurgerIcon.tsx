import { ReactElement } from 'react'

interface IProps {
  onClick: () => void
  isOpen: boolean
}

const BurgerIcon = ({ onClick, isOpen }: IProps): ReactElement => {
  return (
    <button onClick={onClick} className='flex flex-col space-y-1.5'>
      <span
        className={`bg-white w-6 h-0.5 inline-block transform transition-transform duration-75 ${
          isOpen ? 'translate-x-2' : 'translate-x-0'
        }`}></span>
      <span
        className={`bg-white w-6 h-0.5 inline-block transform transition-transform duration-75`}></span>
      <span
        className={`bg-white w-6 h-0.5 inline-block transform transition-transform duration-75 ${
          isOpen ? 'translate-x-2' : 'translate-x-0'
        }`}></span>
    </button>
  )
}

export default BurgerIcon

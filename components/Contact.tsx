import { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import SocialNetwork from './SocialNetwork'

const Contact = (): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <section className='container-center text-white section' id='contact'>
      <div className='text-center'>
        <h2 className='mb-4 text-w-2'>Un projet, une idée ?</h2>
        <h3 className='uppercase font-semibold text-w-3'>Contactez moi !</h3>
      </div>
      <div className='mt-10'>
        <SocialNetwork />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full flex flex-col space-y-8 mt-14'>
        {/* <div><p>{Object.keys(errors)[0]}</p></div> */}
        <div className='w-full flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8'>
          <div className='md:w-1/2 flex flex-col'>
            <label htmlFor='nom' className='text-lg mb-3'>
              Nom
            </label>
            <input
              type='text'
              id='nom'
              {...register('nom', { required: 'Champs obligatoire' })}
              className=' p-2.5'
            />
            {errors.nom && (
              <small className='mt-2 text-red-300'>{errors.nom.message}</small>
            )}
          </div>
          <div className='md:w-1/2 flex flex-col'>
            <label htmlFor='prenom' className='text-lg mb-3'>
              Prénom
            </label>
            <input
              type='text'
              id='prenom'
              {...register('prenom', { required: 'Champs obligatoire' })}
              className=' p-2.5'
            />
            {errors.prenom && (
              <small className='mt-2 text-red-300'>
                {errors.prenom.message}
              </small>
            )}
          </div>
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='email' className='text-lg mb-3'>
            Email
          </label>
          <input
            type='email'
            id='email'
            {...register('email', {
              required: 'Champs obligatoire',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Remplissez une adresse email valide',
              },
            })}
            className=' p-2.5'
          />
          {errors.email && (
            <small className='mt-2 text-red-300'>{errors.email.message}</small>
          )}
        </div>
        <div className='w-full flex flex-col'>
          <label htmlFor='message' className='text-lg mb-3'>
            Décrivez moi votre projet
          </label>
          <textarea
            id='message'
            rows={10}
            {...register('message', { required: 'Champs obligatoire' })}
            className=' p-2.5'></textarea>
          {errors.message && (
            <small className='mt-2 text-red-300'>
              {errors.message.message}
            </small>
          )}
        </div>
        <div>
          <button type='submit' className='btn w-full'>
            Envoyer le message
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact

/* eslint-disable @next/next/no-img-element */
import { GoLocation } from 'react-icons/go';

function Map() {
  return (
    <div>
      <img src='/apple_map.png' className='rounded-2xl' alt='' />
      <div className='flex items-center gap-2 justify-end text-sm mt-2'>
        <GoLocation size={15} className='text-tertiary' />
        <p className='text-right text-tertiary'>Paris (IDF), France</p>
      </div>
    </div>
  );
}

export default Map;

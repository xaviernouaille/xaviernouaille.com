import { GoLocation } from 'react-icons/go';

function Map() {
  return (
    <div className='flex flex-col gap-4'>
      <header>
        <p className='section-label mb-2'>Localisation</p>
      </header>
      <div className='map-dark overflow-hidden rounded-2xl border border-white/10 bg-black'>
        <iframe
          title='Localisation Xavier Nouaille'
          src='https://www.openstreetmap.org/export/embed.html?bbox=2.13,48.80,2.50,48.92&layer=mapnik&marker=48.8566,2.3522'
          className='w-full h-64 sm:h-72 md:h-80'
          loading='lazy'
        />
      </div>
      <div className='flex items-center gap-2 justify-end text-xs sm:text-sm mt-1.5 text-tertiary'>
        <GoLocation size={15} className='text-tertiary' />
        <p className='text-right'>Paris (IDF), France · Remote EU</p>
      </div>
    </div>
  );
}

export default Map;

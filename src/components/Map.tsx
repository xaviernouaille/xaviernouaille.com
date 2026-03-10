function Map() {
  return (
    <div className='section-wide'>
      <section className='section-wide-inner pt-16 sm:pt-20 pb-16 sm:pb-20'>
        <p className='section-label mb-3'>Localisation</p>
        <h2 className='section-title mb-6'>Paris (IDF), France · Remote EU</h2>
        <div className='map-dark overflow-hidden rounded-lg border border-white/[0.06]'>
          <iframe
            title='Localisation Xavier Nouaille'
            src='https://www.openstreetmap.org/export/embed.html?bbox=2.13,48.80,2.50,48.92&layer=mapnik&marker=48.8566,2.3522'
            className='w-full h-64 sm:h-80'
            loading='lazy'
          />
        </div>
      </section>
    </div>
  );
}

export default Map;

'use client';

/** Style Studio — iframe partagée (.html) */
const MAPBOX_STYLE_PATH = 'mapboxstricken09/cmn7wskke000c01r0136rawwv';

/** Vue initiale (zoom / lat / lng / bearing / pitch) — fragment # du viewer Mapbox */
const MAPBOX_VIEW_HASH = '#15.30/48.859237/2.293681/350.4/48';

function getMapboxEmbedSrc(token: string): string {
  const base = `https://api.mapbox.com/styles/v1/${MAPBOX_STYLE_PATH}.html`;
  const qs = new URLSearchParams({
    title: 'false',
    access_token: token,
    zoomwheel: 'false',
  });
  return `${base}?${qs.toString()}${MAPBOX_VIEW_HASH}`;
}

function MapContent() {
  /** Référence directe pour que Next/Webpack remplace bien la var au build (export statique). */
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

  if (token) {
    return (
      <iframe
        title='Localisation Xavier Nouaille — Paris'
        src={getMapboxEmbedSrc(token)}
        className='h-[400px] w-full border-0'
        loading='lazy'
        allowFullScreen
      />
    );
  }

  return (
    <div
      className='flex h-[400px] w-full items-center justify-center bg-zinc-950/80 px-6 text-center text-sm text-zinc-500'
      role='status'
    >
      Carte Mapbox indisponible : définissez{' '}
      <code className='rounded bg-zinc-900 px-1.5 py-0.5 text-zinc-400'>
        NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
      </code>
      .
    </div>
  );
}

function Map() {
  return (
    <div className='section-wide'>
      <section className='section-wide-inner pt-16 sm:pt-20 pb-16 sm:pb-20'>
        <p className='section-label mb-3'>Localisation</p>
        <h2 className='section-title mb-6'>Paris (IDF), France · Remote EU</h2>
        <div className='overflow-hidden rounded-lg border border-white/[0.06]'>
          <MapContent />
        </div>
      </section>
    </div>
  );
}

export default Map;

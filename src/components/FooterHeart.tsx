'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { FiHeart } from 'react-icons/fi';

function FooterHeart() {
  const [count, setCount] = useState(0);
  const [pulse, setPulse] = useState(false);
  const inViewPlayed = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const triggerPulse = useCallback(() => {
    setPulse(true);
    const t = setTimeout(() => setPulse(false), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting || inViewPlayed.current) return;
        inViewPlayed.current = true;
        triggerPulse();
      },
      { threshold: 0.5, rootMargin: '0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerPulse]);

  const handleClick = useCallback(() => {
    setCount((c) => c + 1);
    triggerPulse();
  }, [triggerPulse]);

  return (
    <div ref={containerRef} className='mb-6 flex flex-col items-center gap-1'>
      <button
        type='button'
        onClick={handleClick}
        aria-label='Cœur'
        className='group rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-[var(--background)]'
      >
        <FiHeart
          className={`h-6 w-6 transition-transform duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-active:scale-95 ${pulse ? 'heart-pulse-animate' : ''}`}
          strokeWidth={1.5}
        />
      </button>
      <span className='text-xs tabular-nums mt-2 font-bold text-white'>
        {count}
      </span>
    </div>
  );
}

export default FooterHeart;

'use client';

import moment from 'moment';
import { useEffect, useState } from 'react';

export const DataCounter = () => {
  const getCurrentDate = () => {
    const formattedParisDate = moment().format('D/MM/yy HH:mm:ss');
    return formattedParisDate;
  };
  const [date, setDate] = useState<string>(getCurrentDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(getCurrentDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className='py-0 mb-0 text-right' suppressHydrationWarning>
        {date.toString()}
      </p>
      <p className='opacity-70 mt-0 small py-0 text-right'>
        UTC+01:00 - Paris, FR
      </p>
    </div>
  );
};

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
    <div className='mt-12'>
      <p className='mb-2 pb-0'>{date.toString()}</p>
      <p className='opacity-70 mt-0'>UTC+01:00 - Paris, FR</p>
    </div>
  );
};

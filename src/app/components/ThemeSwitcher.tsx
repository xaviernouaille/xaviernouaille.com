'use client';

import { Switch } from '@/components/ui/switch';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex justify-end mt-6'>
      <div className='flex items-center space-x-1'>
        <SunIcon size={16} />
        <Switch
          checked={theme === 'dark'}
          onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        <MoonIcon size={16} />
      </div>
    </div>
  );
};

export default ThemeSwitcher;

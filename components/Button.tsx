import React from 'react';
import { useTheme } from 'next-themes';

export default function Button() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      <input
        checked={currentTheme === 'dark'}
        hidden={true}
        type="checkbox"
        id="darkmode-toggle"
        onChange={() => {
          if (theme === 'dark') setTheme('light');
          else setTheme('dark');
        }}
      />
      <label
        className="w-[40px] h-[20px] relative block rounded-[20px] shadow-[0_5px_15px_0_rgba(0,0,0,0.4)]
        after:w-[18px] after:h-[18px] after:absolute after:top-[1px] after:left-[1px] after:bg-gradient-to-r after:from-yellow-300 after:to-orange-500
        after:rounded-[18px] after:shadow-[0_5px_10px_0_rgba(0,0,0,0.2)] active:after:w-[22px]
        dark:after:left-[39px] dark:after:bg-gradient-to-r dark:after:from-slate-600 dark:after:to-slate-100 dark:after:-translate-x-full
        duration-300 transition-all
        "
        htmlFor="darkmode-toggle"
      ></label>
    </div>
  );
}

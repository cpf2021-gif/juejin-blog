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
        className="switch_button"
        htmlFor="darkmode-toggle"
      ></label>
    </div>
  );
}

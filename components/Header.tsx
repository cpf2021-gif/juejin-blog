import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useTheme } from 'next-themes'

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if(!mounted) return null

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon className='w-7 h-7' role='button' onClick={() => setTheme('light')} />
      )
    } else {
      return (
        <MoonIcon className='w-7 h-7' role='button' onClick={() => setTheme('dark')} />
      )
    }
  }

  return (
    <header className='border-b border-gray-100 dark:border-t-gray-700'>
      <div className='container mx-auto flex px-4 justify-center items-center'>
        {renderThemeChanger()}
      </div>
    </header>
  )
}

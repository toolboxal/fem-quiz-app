import { useEffect } from 'react'
import NavBar from './NavBar'
import { useMode } from './store'
import AppLayout from './AppLayout'
import { clsx } from 'clsx'

function App() {
  const mode = useMode((state) => state.mode)
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return (
    <main
      className={clsx(
        `relative font-rubik bg-background h-screen bg-no-repeat`,
        mode === 'light'
          ? 'bg-mobileLight md:bg-tabletLight lg:bg-desktopLight'
          : 'bg-mobileDark md:bg-tabletDark lg:bg-desktopDark'
      )}
    >
      <NavBar />
      <AppLayout />
    </main>
  )
}
export default App

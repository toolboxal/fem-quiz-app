import { useEffect } from 'react'
import { useStore } from './store.js'
import StartScreen from './StartScreen.jsx'
import QnScreen from './QnScreen.jsx'
import CompletionScreen from './CompletionScreen.jsx'

const AppLayout = () => {
  const setQns = useStore((state) => state.setQns)
  const gameStart = useStore((state) => state.gameStart)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data.json')
      const data = await response.json()
      setQns(data)
    }
    fetchData()
  }, [setQns])

  return (
    <section className="my-4 mx-6 md:mx-16 lg:my-24 max-w-[1208px] xl:mx-auto">
      {gameStart === 'inactive' && <StartScreen />}
      {gameStart === 'active' && <QnScreen />}
      {gameStart === 'completed' && <CompletionScreen />}
    </section>
  )
}
export default AppLayout

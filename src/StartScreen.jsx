import { useStore } from './store.js'
import CategoryTile from './CategoryTile.jsx'

const StartScreen = () => {
  const qns = useStore((state) => state.qns)

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      {/* TEXT */}
      <div>
        <h1 className="text-textColorPrimary text-[40px] leading-[50px] mb-4 md:text-6xl">
          Welcome to the <br />
          <span className="font-medium inline-block">Frontend Quiz!</span>
        </h1>
        <p className="text-textColorSecondary italic text-sm md:text-lg">
          Pick a subject to get started.
        </p>
      </div>
      {/* OPTIONS */}
      <div className="flex flex-col gap-2">
        {qns?.quizzes &&
          qns?.quizzes.map((quiz) => {
            return <CategoryTile key={quiz.title} data={quiz} />
          })}
      </div>
    </div>
  )
}
export default StartScreen

import { useStore } from './store.js'
import ConfettiExplosion from 'react-confetti-explosion'

const CompletionScreen = () => {
  const category = useStore((state) => state.category)
  const score = useStore((state) => state.score)
  const reset = useStore((state) => state.reset)

  const totalQns = category.questions.length

  const handleClick = () => {
    reset()
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      {/* TEXT */}
      <div>
        <h1 className="text-textColorPrimary text-[40px] leading-[50px] mb-4 md:text-6xl">
          Quiz completed{' '}
          <span className="font-medium inline-block">You scored...</span>
        </h1>
      </div>
      {/* OPTIONS */}
      <div className="flex flex-col gap-4">
        <div className="py-8 bg-optionBackground rounded-xl flex flex-col items-center lg:space-y-5">
          <ConfettiExplosion
            force={0.8}
            duration={3000}
            particleCount={200}
            width={1600}
          />
          <div className="flex items-center gap-4">
            <div className="bg-optionTile rounded-md object-contain md:h-14 md:w-14 flex items-center justify-center">
              <img src={category.icon} alt="" className="" />
            </div>
            <p className="text-textColorPrimary font-medium text-lg md:text-[28px]">
              {category.title}
            </p>
          </div>

          <p className="text-center font-medium text-[88px] lg:text-9xl">
            {score}
          </p>
          <p className="text-center text-lg text-textColorSecondary font-medium">
            out of {totalQns}
          </p>
        </div>
        <button
          type="button"
          className="w-full p-3 bg-purplePrimary text-white font-medium rounded-xl flex items-center justify-center shadow-sm active:shadow-md"
          onClick={handleClick}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}
export default CompletionScreen

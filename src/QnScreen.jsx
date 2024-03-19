import { useStore } from './store.js'
import QnTile from './QnTile.jsx'
import { toast } from 'sonner'

const QnScreen = () => {
  const category = useStore((state) => state.category)
  const curQnIndex = useStore((state) => state.curQnIndex)
  const setCurQnIndex = useStore((state) => state.setCurQnIndex)
  const selection = useStore((state) => state.selection)
  const setSelection = useStore((state) => state.setSelection)
  const answer = useStore((state) => state.answer)
  const setAnswer = useStore((state) => state.setAnswer)
  const setGameStart = useStore((state) => state.setGameStart)

  const setScore = useStore((state) => state.setScore)
  const totalQns = category.questions.length

  const currentQn = category.questions[curQnIndex].question
  const correctAnswer = category.questions[curQnIndex].answer
  const percentage = (((curQnIndex + 1) / totalQns) * 100).toString()

  const handleClick = () => {
    if (selection === '') {
      toast.error('Please select an answer')
      return
    }
    if (answer === 'submitted' && curQnIndex + 1 === totalQns) {
      setGameStart('completed')
    }

    if (answer === 'unsubmitted' && correctAnswer === selection) {
      setAnswer('submitted')
      setScore()

      return
    } else if (answer === 'unsubmitted' && correctAnswer !== selection) {
      setAnswer('submitted')
      return
    } else if (answer === 'submitted') {
      setCurQnIndex()
      setSelection('')
      setAnswer('unsubmitted')
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      <div>
        {/* TEXT */}
        <p className="text-textColorSecondary italic text-sm mb-6 lg:text-xl">
          Question {curQnIndex + 1} of {totalQns}
        </p>
        <p className="text-textColorPrimary font-medium text-[20px] leading-8 mb-6 lg:text-3xl lg:mb-20">
          {currentQn}
        </p>

        <div className="w-full h-4 bg-optionBackground rounded-full flex items-center p-1">
          <div
            className={'rounded-full bg-purplePrimary h-2 z-10'}
            style={{ width: percentage + '%' }}
          ></div>
        </div>
      </div>
      {/* OPTIONS */}
      <div>
        <div className="flex flex-col gap-3">
          {category.questions[curQnIndex].options.map((option, index) => {
            return (
              <QnTile
                key={index}
                option={option}
                index={index}
                correctAnswer={correctAnswer}
              />
            )
          })}
          <button
            type="button"
            className="w-full p-3 bg-purplePrimary text-white font-medium rounded-xl flex items-center justify-center shadow-sm active:shadow-md active:bg-purpleSecondary"
            onClick={handleClick}
          >
            {answer !== 'unsubmitted'
              ? curQnIndex !== totalQns - 1
                ? 'Next Question'
                : 'See Your Score'
              : 'Submit Answer'}
          </button>
        </div>
      </div>
    </div>
  )
}
export default QnScreen

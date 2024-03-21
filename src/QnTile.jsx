/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useStore } from './store.js'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

const optionMapping = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
}

const QnTile = ({ option, index, correctAnswer }) => {
  const selection = useStore((state) => state.selection)
  const setSelection = useStore((state) => state.setSelection)
  const answer = useStore((state) => state.answer)

  return (
    <button
      type="button"
      disabled={answer === 'submitted'}
      className={twMerge(
        clsx(
          'w-full p-3 bg-optionBackground rounded-xl flex items-center gap-3 shadow-sm active:shadow-md group appearance-none',
          answer === 'unsubmitted' && 'focus:ring-2 focus:ring-purplePrimary',
          answer === 'submitted' &&
            option === correctAnswer &&
            'ring-2 ring-green',
          answer === 'submitted' &&
            option === selection &&
            option !== correctAnswer &&
            'ring-2 ring-red'
        )
      )}
      onClick={() => {
        setSelection(option)
      }}
    >
      <div
        className={twMerge(
          clsx(
            'bg-optionTile rounded-md w-10 h-10 shrink-0 flex justify-center items-center appearance-none',
            answer === 'unsubmitted' && 'group-focus:bg-purplePrimary',
            answer === 'submitted' && option === correctAnswer && 'bg-green',
            answer === 'submitted' &&
              selection === option &&
              option !== correctAnswer &&
              'bg-red'
          )
        )}
      >
        <p
          className={twMerge(
            clsx(
              'font-medium text-textColorSecondary group-focus:text-white appearance-none',
              answer === 'submitted' &&
                option === correctAnswer &&
                'text-white',
              answer === 'submitted' &&
                selection === option &&
                option !== correctAnswer &&
                'text-white'
            )
          )}
        >
          {optionMapping[index]}
        </p>
      </div>
      <p className="text-textColorPrimary font-medium text-sm text-left">
        {option}
      </p>
    </button>
  )
}
export default QnTile

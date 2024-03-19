/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { useStore } from './store.js'

const CategoryTile = ({ data }) => {
  const setCategory = useStore((state) => state.setCategory)

  const setGameStart = useStore((state) => state.setGameStart)
  return (
    <button
      className="w-full p-3 bg-optionBackground rounded-xl flex items-center gap-3 shadow-sm active:shadow-md active:translate-y-[1px] active:translate-x-[1px]"
      onClick={() => {
        setCategory(data)

        setGameStart('active')
      }}
    >
      <div className="bg-optionTile rounded-md object-contain">
        <img src={data.icon} alt="" className="" />
      </div>
      <p className="text-textColorPrimary font-medium text-lg">{data.title}</p>
    </button>
  )
}
export default CategoryTile

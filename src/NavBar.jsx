import { Text, Flex, Switch } from '@radix-ui/themes'
import { useMode, useStore } from './store'
import { clsx } from 'clsx'

const NavBar = () => {
  const category = useStore((state) => state.category)
  const gameStart = useStore((state) => state.gameStart)
  const changeMode = useMode((state) => state.changeMode)
  const mode = useMode((state) => state.mode)

  return (
    <nav className=" w-full flex px-6 py-[26px] max-w-[1208px]  justify-between items-center md:px-16 md:py-10  mx-auto xl:px-0">
      <div className="flex items-center gap-4 md:gap-6">
        <div
          className={clsx(
            `bg-optionTile rounded-md object-contain flex items-center justify-center`,
            gameStart === 'active' && 'md:h-14 md:w-14'
          )}
        >
          <img src={category.icon} alt="" />
        </div>
        <p className="text-textColorPrimary font-medium text-lg md:text-[28px]">
          {category.title}
        </p>
      </div>

      <Text as="label" size="2" className="cursor-pointer w-fit">
        <Flex gap="1">
          <img
            src={
              mode === 'light'
                ? '/assets/images/icon-sun-dark.svg'
                : '/assets/images/icon-sun-light.svg'
            }
            alt="theme switcher lightmode"
          />
          <Switch
            defaultChecked
            color="purple"
            onCheckedChange={() => changeMode()}
          />
          <img
            src={
              mode === 'light'
                ? '/assets/images/icon-moon-dark.svg'
                : '/assets/images/icon-moon-light.svg'
            }
            alt="theme switcher lightmode"
          />
        </Flex>
      </Text>
    </nav>
  )
}
export default NavBar

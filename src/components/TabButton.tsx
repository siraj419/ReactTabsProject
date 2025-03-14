import { FC, ReactNode } from "react"

interface TabButtonProps {
    setActive: () => void,
    isActive: boolean,
    children: ReactNode
};
// IntrinsicAttributes
const TabButton : FC<TabButtonProps> = ({setActive, isActive, children}) => {
  return (
    <button 
        className={
            `flex gap-1 justify-center items-center
              md:w-[200px]
             ${isActive && "border-b-2"}
             ${!isActive ? "text-[#a1a1a1]" : "text-black"}`
        }
        onClick={setActive}
        style={{padding: "5px 0"}}
    >
        {children}
    </button>
  )
}

export default TabButton;
import { IoIosHome } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <aside className="
        h-full bg-black text-white flex flex-col justify-between items-center
        w-[5%] text-2xl md:text-3xl max-w-[60px] min-w-[40px]" 
        style={{
            "padding": "10px"
        }}
    >
        <section className="flex flex-col gap-5">
            <IoIosHome />
            <IoSearch />
            <IoMdContact />
        </section>

        <section className="flex flex-col gap-5">
            <IoMdContact />
            <IoIosSettings />
        </section>

    </aside>
  )
}

export default Sidebar;
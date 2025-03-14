
import { useState, ReactNode } from "react"

// Components
import Home from "./Home"
import Contact from "./Contact"
import Projects from "./Projects"
import About from "./About" 
import Courses from "./Courses"
import TabButton from "./TabButton"

// Icons
import { IoIosHome } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { SiCoursera } from "react-icons/si";
import { IoMdContact } from "react-icons/io";

const tabs : ReactNode[] = [<Home />,  <About />,  <Projects />, <Courses />, <Contact />];

const Tabs = () => {

    const [active, setActive] = useState<number>(0);
    
    return (
        <main>

            <section className="border-b-1 border-[#e8e8e8] flex justify-around text-lg sm:text-xl md:text-md">
                
                <TabButton setActive={() => setActive(0)} isActive={active === 0}>
                    <IoIosHome />
                    <span className="hidden md:inline">Home</span>
                </TabButton>
               
                <TabButton setActive={() => setActive(1)} isActive={active === 1}>
                    <AiOutlineExclamationCircle />
                    <span className="hidden md:inline">ABOUT</span>
                </TabButton>
              
                <TabButton setActive={() => setActive(2)} isActive={active === 2}>
                    <AiOutlineFundProjectionScreen />
                    <span className="hidden md:inline">PROJECTS</span>
                </TabButton>

                <TabButton setActive={() => setActive(3)} isActive={active === 3}>
                    <SiCoursera />
                    <span className="hidden md:inline">COURSES</span>
                </TabButton>

                <TabButton setActive={() => setActive(4)} isActive={active === 4}>
                    <IoMdContact />
                    <span className="hidden md:inline">CONTACT</span>
                </TabButton>
            </section>

            <section>{tabs[active]}</section>
        </main>
    )
}

export default Tabs
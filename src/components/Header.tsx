import { useState } from "react"
import CameraButton from "./CameraButton";

const Header = () => {

    const [bannerURL, setBannerURL] = useState<string>("");
    const [profileURL, setProfileURL] = useState<string>("");

    const handleBannerChange = (e: any) => {
        const file = e.target.files[0];

        if(file) setBannerURL(URL.createObjectURL(file));
    }

    const handleProfileChange = (e: any) => {
        const file = e.target.files[0];

        if(file) setProfileURL(URL.createObjectURL(file));
    }

  return (
    <header className="">
        {/* Banner  */}
        <section className="bg-[rgb(216,216,216)] h-[300px] relative">
            {
                bannerURL != "" &&
                <img 
                    src={bannerURL}
                    alt="banner" 
                    className="w-full h-full"
                />
            }

            <CameraButton 
                position={{top: "2px", right: "2px"}}
                onChangeHandler={handleBannerChange}
            />

        </section>

        <section className="flex items-center flex-col md:flex-row justify-center gap-[20px]" style={{padding: "30px 10px"}}>
            <section className="
                w-[150px] h-[150px]
                rounded-full bg-gray-200
                relative
                "
            >
                {
                    profileURL != "" &&
                    <img 
                        src={profileURL}
                        alt="banner" 
                        className="w-full h-full"
                    />
                }
                <CameraButton 
                    position={{bottom: "-10px", right: "38%"}}
                    onChangeHandler={handleProfileChange}
                />
            </section>

            <section className="text-center md:text-left flex-1/2">
                <h1 className="text-2xl font-bold">
                    Siraj WebDev
                </h1>
                <div className="text-sm" style={{marginTop: "-2px"}}>
                    1M Views
                </div>
                <p  style={{marginTop: "5px"}}>
                    This is short description of the youtube channel.It gives an overview of content and 
                    what viewers can expect. 
                </p>
                <div style={{marginTop: "5px"}}>
                    <button className="bg-red-500 text-white rounded-md" style={{padding: "8px 16px"}}>
                        Subscribe
                    </button>
                </div>
            </section>
        </section>
    </header>
  )
}

export default Header
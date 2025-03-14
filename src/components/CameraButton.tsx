import { FC, useId } from "react"
import { IoIosCamera } from "react-icons/io"

interface CameraButtonProps{
    position: {
        top?: string,
        left?: string,
        bottom?: string,
        right?: string
    };
    onChangeHandler: (e: any) => void
}

const CameraButton : FC<CameraButtonProps> = ({position, onChangeHandler}) => {
    const uniqueId = useId();
    return (
        <button 
            className="absolute rounded-full bg-black text-white flex justify-center items-center"
            style={{padding: "7px", ...position}}
        >
            <label htmlFor={uniqueId} className="cursor-pointer">
                <IoIosCamera size={24}/>
            </label>

            <input 
                type="file"
                accept="image/*"
                id={uniqueId}
                className="hidden"
                onChange={onChangeHandler}
            />
        </button>
    )
}

export default CameraButton
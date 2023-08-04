import React from "react"

function Menu(option) {
    return (
        <div className="flex flex-col items-center text-center">
            <button
                type="button"
                className="w-[60%] text-sm m-5 bg-[rgba(0,0,0,0.5)] border-[#C6FF4E] text-white py-4 px-8 rounded transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-white duration-150 ..."
                onClick= {option.onClick}
            >
                <div className="flex items-center justify-center">
                    <span className="visually-hidden"></span>
                    <span>{option.name}</span>
                    <span className="visually-hidden"></span>
                    <img
                        src="./src/assets/svgs/arrowright.svg"
                        alt="Icon"
                        className="w-6 h-6"
                    />
                </div>
            </button>
        </div>
    )
}

export default Menu

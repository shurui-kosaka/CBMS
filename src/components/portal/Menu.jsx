import React from "react"

export default function Menu(props) {
    return (
        <div className="flex flex-col items-center w-full">
            <button
                type="button"
                className="w-[60%] h-[5rem] text-xl m-5 bg-[rgba(0,0,0,0.5)] border-[#C6FF4E] border text-white py-4 px-8 rounded-[20px] transition ease-in-out delay-10 hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-white duration-70 relative"
                onClick= {props.onClick}
            >
                <div className="flex flex-row">
                    <div className="flex-1 text-left">
                        <span>{props.name}</span>
                    </div>
                    <div>
                        <img
                            src="assets/svgs/arrowright.svg"
                            alt="Icon"
                            className="w-6 h-6"
                        />
                    </div>
                </div>
            </button>
        </div>
    )
}

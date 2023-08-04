import React from "react"

function Sidepic() {
    return (
        <div className='flex h-full w-full'>
            <div className='mainPics relative h-full w-full overflow-hidden'>
                        <img src="./src/assets/images/appbg.png" className='h-full w-full object-cover md:rounded-tr-[40px] md:rounded-br-[40px]'/>
                        <img src="./src/assets/images/logowithtext.png" className='logo absolute bottom-9 left-0 w-[80%]'/>
            </div>
        </div>
    )
}

export default Sidepic

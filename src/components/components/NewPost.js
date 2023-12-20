import React from "react";

export default function NewPost() {
    return(
            <div className="ml-[25vw] bg-white border border-gray-400 w-[47%] h-[20vh] rounded-2xl grid">
                <div className="flex mt-[4vh]">
                    <img src="sanji.jpg" className="ml-[1vw] mt-auto mb-auto w-[10%] h-[90%] rounded-full border border-r-1 border-r-[#A8A6A6]"/>
                    <input className="bg-white border border-gray-400 rounded-2xl w-[80%] h-[7vh] ml-[1vw] mt-auto mb-auto pl-[1vw]" type="text" placeholder="Express what you feel..."/>
                </div>
                <div className="flex mr-[5vw]">
                    <img src="media.svg" className="ml-auto h-[4vh] w-[4vw] cursor-pointer"/>
                    <div className="text-black font-roboto text-sm font-bold cursor-pointer">
                        Media
                    </div>
                    <img src="Calendar.svg" className="h-[4vh] w-[4vw] cursor-pointer"/>
                    <div className="text-black font-roboto text-sm font-bold cursor-pointer">
                        Evenement
                    </div>
                </div>
            </div>
    )
}
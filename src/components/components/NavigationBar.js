import React from "react";

export default function NavigationBar() {
    return(
        <div className="bg-white w-[100vw] h-[10vh] border-b border-gray-400 flex">
            <img src="khayrconnect;logo.svg" className="h-[8vh] w-[6vw] mt-auto mb-auto ml-[3vw]"/>
            <div className="mt-auto mb-auto ml-[2vw]">
                <input className="rounded-lg bg-gray-300 p-4 h-[4vh] focus:outline-0 pl-[3vw]"/>
                <img src="recherche.svg" className="mt-[-3.7vh] h-[3vh] w-[3vw]"/>
            </div>
        </div>
    )
}
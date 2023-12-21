import React from "react";
import {useNavigate} from "react-router-dom";

export default function NavigationBar({ onBellClick }) {

    const handleBellClick = () => {
        onBellClick();
    };

    let navigate = useNavigate();
    const navigateToSettings = (event) => {
        event.preventDefault();
        return navigate("/Settings");
    }

    const navigateToPost = (event) => {
        event.preventDefault();
        return navigate("/Posts");
    }


    return(
        <div className="bg-white w-[100vw] h-[10vh] border-b border-gray-400 flex fixed">
            <img src="khayrconnect;logo.svg" className="h-[8vh] w-[6vw] mt-auto mb-auto ml-[3vw] cursor-pointer" onClick={navigateToPost}/>
            <div className="mt-auto mb-auto ml-[2vw]">
                <input className="rounded-lg bg-gray-300 p-4 h-[4vh] focus:outline-0 pl-[3vw]" type="text" placeholder="Search anything"/>
                <img src="recherche.svg" className="mt-[-3.7vh] h-[3vh] w-[3vw]"/>
            </div>
            <div className="flex ml-auto mr-[2vw] mt-auto mb-auto">
                <div className="inline-block cursor-pointer">
                    <img src="home.svg" className="h-[5vh] w-[5vw] mr-[2vw]"/>
                    <div className="text-black font-maven-pro text-sm font-normal ml-[1vw]">
                        Home
                    </div>
                </div>
                <div className="inline-block cursor-pointer">
                    <img src="bell.svg" className="h-[5vh] w-[5vw] mr-[2vw] ml-[0.4vw] cursor-pointer" onClick={handleBellClick}/>
                    <div className="text-black font-maven-pro text-sm font-normal">
                        Notification
                    </div>
                </div>
                <div className="inline-block cursor-pointer">
                    <img src="settings.svg" className="h-[5vh] w-[5vw] mr-[2vw]" onClick={navigateToSettings}/>
                    <div className="text-black font-maven-pro text-sm font-normal ml-[0.5vw]">
                        Settings
                    </div>
                </div>
            </div>
        </div>
    )
}
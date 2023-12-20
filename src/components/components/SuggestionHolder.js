import React from "react";

export default function SuggestionHolder() {
    return(
        <div className="bg-white w-[23vw] rounded-2xl pt-[3vh] h-[65vh] fixed border border-gray-400 ml-[75vw] mt-[-80vh] pl-[2vw]">
            <div className="font-maven-pro font-bold font-2xl">
                Vous pourriez aimer
            </div>
            <div className="flex mt-[2vh]">
                <img src="even.png" className="w-[5vw] h-[10vh]"/>
                <div className="inline-block">
                    <div className=" ml-[5%] flex gap-[10%]">
                        <div className="font-maven-pro font-xl font-bold">
                            DISSE
                        </div>
                        <img src="verify.svg"/>
                    </div>
                    <div className="ml-[5%] text-gray-500 font-maven-pro text-xs font-medium">
                        Association Humanitaire & Caritative
                    </div>
                </div>
            </div>
            <button className="rounded-full w-[40%] h-[10%] ml-[25%] border border-gray-600">
                <div className="font-maven-pro font-light text-gray-700">
                    + Follow
                </div>
            </button>
            <div className="flex mt-[2vh]">
                <img src="even.png" className="w-[5vw] h-[10vh]"/>
                <div className="inline-block">
                    <div className=" ml-[5%] flex gap-[10%]">
                        <div className="font-maven-pro font-xl font-bold">
                            DISSE
                        </div>
                        <img src="verify.svg"/>
                    </div>
                    <div className="ml-[5%] text-gray-500 font-maven-pro text-xs font-medium">
                        Association Humanitaire & Caritative
                    </div>
                </div>
            </div>
            <button className="rounded-full w-[40%] h-[10%] ml-[25%] border border-gray-600">
                <div className="font-maven-pro font-light text-gray-700">
                    + Follow
                </div>
            </button>
            <div className="flex mt-[2vh]">
                <img src="even.png" className="w-[5vw] h-[10vh]"/>
                <div className="inline-block">
                    <div className=" ml-[5%] flex gap-[10%]">
                        <div className="font-maven-pro font-xl font-bold">
                            DISSE
                        </div>
                        <img src="verify.svg"/>
                    </div>
                    <div className="ml-[5%] text-gray-500 font-maven-pro text-xs font-medium">
                        Association Humanitaire & Caritative
                    </div>
                </div>
            </div>
            <button className="rounded-full w-[40%] h-[10%] ml-[25%] border border-gray-600">
                <div className="font-maven-pro font-light text-gray-700">
                    + Follow
                </div>
            </button>
        </div>
    )
}
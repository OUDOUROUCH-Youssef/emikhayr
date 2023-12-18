import React from "react";

export default function ProfileHolder() {
    return(
        <div className="pt-[15vh] pl-10 fixed">
            <div className="bg-white border border-gray-400 h-[60vh] w-[25vw] rounded-3xl">
                <div className="rounded-t-3xl bg-[#064789] p-4 h-[25%]">
                    <img src="sanji.jpg" className="ml-[32.5%] mt-[4vh] w-[35%] h-[15vh] rounded-full border border-r-1 border-r-[#A8A6A6]"/>
                </div>
                <div className="w-[100%] flex">
                    <div className="text-black font-maven-pro text-base font-normal ml-auto mr-auto mt-[7vh]">
                        Abdelilah AYACHE
                    </div>
                </div>
                <div className="w-[100%] mt-[-7vh] flex">
                    <div className="text-[#427AA1] hover:text-[#064789] cursor-pointer font-maven-pro text-base font-normal ml-auto mr-auto mt-[7vh]">
                        View profile
                    </div>
                </div>
                <div className="text-black text-center font-roboto text-base font-medium mr-[50%] mt-[1vh]">
                    Evènement a venir
                </div>
            </div>
        </div>
    )
}
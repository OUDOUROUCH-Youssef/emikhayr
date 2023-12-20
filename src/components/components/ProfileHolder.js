import React from "react";

export default function ProfileHolder() {
    return(
        <div className="pt-[15vh] pl-10 fixed">
            <div className="bg-white border border-gray-400 h-[80vh] w-[25vw] rounded-3xl">
                <div className="rounded-t-3xl bg-[#064789] p-4 h-[20%]">
                    <img src="sanji.jpg" className="ml-[32.5%] mt-[5vh] w-[35%] h-[15vh] rounded-full border border-r-1 border-r-[#A8A6A6]"/>
                </div>
                <div className="w-[100%] flex">
                    <div className="text-black font-maven-pro text-base font-normal ml-auto mr-auto mt-[6vh]">
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
                <div className="flex ml-[1vw] mt-[1vh]">
                    <img src="even.png" className="w-[4vw] h[4vh]"/>
                    <div className="inline-block">
                        <div className="font-maven-pro text-black font-xl font-bold">
                            Voyage humanitaire à Madagascar
                        </div>
                        <div className="flex">
                            <img src="position.png"/>
                            <div className="text-[#A8A6A6] font-maven-pro font-md">
                                Rabat
                            </div>
                        </div>
                        <div className="inline-flex">
                            <img src="time.png"/>
                            <div className="text-[#A8A6A6] font-maven-pro font-md">
                                18-01-2024
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ml-[1vw] mt-[1vh]">
                    <img src="even.png" className="w-[4vw] h[4vh]"/>
                    <div className="inline-block">
                        <div className="font-maven-pro text-black font-xl font-bold">
                            Voyage humanitaire à Madagascar
                        </div>
                        <div className="flex">
                            <img src="position.png"/>
                            <div className="text-[#A8A6A6] font-maven-pro font-md">
                                Rabat
                            </div>
                        </div>
                        <div className="inline-flex">
                            <img src="time.png"/>
                            <div className="text-[#A8A6A6] font-maven-pro font-md">
                                18-01-2024
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ml-[1vw] mt-[1vh]">
                    <img src="even.png" className="w-[4vw] h[4vh]"/>
                    <div className="inline-block">
                        <div className="font-maven-pro text-black font-xl font-bold">
                            Voyage humanitaire à Madagascar
                        </div>
                        <div className="flex">
                            <img src="position.png"/>
                            <div className="text-[#A8A6A6] font-maven-pro font-md">
                                Rabat
                            </div>
                        </div>
                        <div className="inline-flex">
                            <img src="time.png"/>
                            <div className="text-[#A8A6A6] font-maven-pro font-md">
                                18-01-2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
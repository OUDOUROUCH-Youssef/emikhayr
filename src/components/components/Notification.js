import React, {useState} from "react";

export default function Notification({showOption,onClickButton}) {
    const events=[{user:"EmiKhayr",event:"a publié une nouvelle publication",timeDecole:"maintenent",url:"emi-khayr.jpg"},
        {user:"EmiKhayr",event:"organiser la première édition du forum social",timeDecole:"2h",url:"emi-khayr.jpg"},
    {user:"EmiKhayr",event:"a aimé votre publication",timeDecole:"1 semaine",url:"emi-khayr.jpg"}];

    const hide = () => {
        onClickButton();
    }


    return(
        showOption? (<div className="fixed mr-auto w-[100vw] h-[100vh] z-20 bg-black bg-opacity-0 flex justify-center" onClick={onClickButton}>
        <div className="pt-[9vh] ml-[69vw] pl-10 fixed z-20">
            <div className="bg-white border border-gray-400 pb-[2vh] w-[25vw] rounded-3xl">
                <div className="text-black text-center font-roboto text-base font-medium mr-[50%] mt-[1vh]">Notification</div>
                {events.map((item, index)=>(
                <div className="flex">
                    <img key={index} src={item.url} className="ml-[1vw] mt-[4vh] w-[10%] h-[15%] rounded-full border border-r-1 border-r-[#A8A6A6]"/>
                    <div className="flex-row">
                        <div className="text-black font-roboto text-l font-bold mt-[4vh] ml-4">
                            {item.user}
                        </div>
                        <div className="text-gray-400 font-roboto text-base ml-4 mt-[-0.5vh]">
                            {item.event}
                        </div>
                        <div className="text-gray-600 font-roboto text-sm font-medium ml-4 mt-[-0.5vh]">
                            {item.timeDecole}
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>):null
    )
}
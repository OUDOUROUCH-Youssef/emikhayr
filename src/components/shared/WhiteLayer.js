import React from "react";
import {useNavigate} from "react-router-dom";

export default function WhiteLayer({isLogIn,bigTitle,place1,place2,type1,type2}) {
    let navigate = useNavigate();
    const handleButtonClick = (event) => {
        event.preventDefault();
        return navigate("/Posts");
    }
    return(
        <div className="flex-auto">
            <img src="khayrconnect;logo.svg" className="flex w-[15vw] h-[15vh] mt-[5vh] ml-auto mr-auto"/>
            <div className="flex ">
                <div className=" ml-auto text-[#064789] font-inter text-xl font-bold">Khayr</div>
                <div className="mr-auto text-[#427AA1] font-inter text-xl font-bold">Connect</div>
            </div>
            <div className="text-center text-black text-shadow font-inter text-3xl font-extrabold ml-auto mr-auto mt-[5vh]">
                {bigTitle}
            </div>
            <input className="rounded-full bg-gray-300 p-4 h-[6vh] w-[80%] ml-[10%] mt-[10vh] text-black font-inter text-base font-normal border-b-0 focus:border-none focus:outline-none" placeholder={place1} type={type1}/>
            <input className="rounded-full bg-gray-300 p-4 h-[6vh] w-[80%] ml-[10%] mt-[6vh] text-black font-inter text-base font-normal border-b-0 focus:border-none focus:outline-none" placeholder={place2} type={type2}/>
            {isLogIn?<div>
                <div className="max-w-content inline-block text-black font-inter text-base font-extrabold mt-[3vh] ml-[11%] cursor-pointer hover:text-[#064789]">
                    Mot de passe oublié ?
                </div>
            </div>:
            <input className="rounded-full bg-gray-300 p-4 h-[6vh] w-[80%] ml-[10%] mt-[6vh] text-black font-inter text-base font-normal border-b-0 focus:border-none focus:outline-none" placeholder="Mot de passe" type="password"/>}
            <button className={isLogIn? 'rounded-full bg-blue-800 w-[25%] p-4 ml-[37.5%] hover:bg-[#427AA1] mt-[10vh]': 'rounded-full bg-blue-800 w-[25%] p-4 ml-[37.5%] hover:bg-[#427AA1] mt-[4.6vh]'} onClick={handleButtonClick}>
                <div className="text-white text-center text-shadow font-inter text-lg font-extrabold">
                    {bigTitle}
                </div>
            </button>
        </div>
    )
}
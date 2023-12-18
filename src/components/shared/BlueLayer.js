import React from "react";

export default function BlueLayer({children,title,miniTitle}) {
    return(
        <div>
            <div>
                <div className="pt-[26vh] blue-layer text-center font-roboto text-6xl font-extrabold text-gray-300">
                    {title}
                </div>
                <div className="mt-[7vh] ml-[25%] mr-[25%] text-center font-roboto text-black text-l font-light">
                    {miniTitle}
                </div>
                {children}
            </div>
        </div>
    )
}
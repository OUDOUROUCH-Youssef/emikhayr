import React, { useRef, useEffect, useState } from "react";

export default function NewPost() {
    const modalRef = useRef();
    const [showOptions, setShowOptions] = useState(false);

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleButtonClick();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="ml-[25vw] bg-white border border-gray-400 w-[47%] h-[20vh] rounded-2xl grid">
            <div className="flex mt-[4vh]">
                <img
                    src="sanji.jpg"
                    className="ml-[1vw] mt-auto mb-auto w-[10%] h-[90%] rounded-full border border-r-1 border-r-[#A8A6A6]"
                />
                <input
                    className="bg-white border border-gray-400 rounded-2xl w-[80%] h-[7vh] ml-[1vw] mt-auto mb-auto pl-[1vw] cursor-pointer"
                    type="text"
                    placeholder="Express what you feel..."
                    onClick={handleButtonClick}
                />
            </div>
            <div className="flex mr-[5vw]">
                <img src="media.svg" className="ml-auto h-[4vh] w-[4vw] cursor-pointer" />
                <div className="text-black font-roboto text-sm font-bold cursor-pointer">
                    Media
                </div>
                <img src="Calendar.svg" className="h-[4vh] w-[4vw] cursor-pointer" />
                <div className="text-black font-roboto text-sm font-bold cursor-pointer">
                    Evenement
                </div>
            </div>
            {showOptions && (
                <div className="fixed left-0 top-0 w-[100vw] h-[100vh] z-20 bg-white bg-opacity-50 flex justify-center items-center" onClick={handleClickOutside}>
                    <div ref={modalRef} className="bg-white w-[50vw] h-[70vh] rounded-3xl flex flex-col border border-black/50 z-30">
                        <div className="ml-auto mr-auto text-3xl font-maven-pro font-semibold mt-[4%]">
                            Create a post
                        </div>
                        <div className="flex mt-[5vh] ml-[5vh]">
                            <img
                                src="sanji.jpg"
                                className="w-[5vw] h-[10vh] rounded-full border border-r-1 border-r-[#A8A6A6]"
                            />
                            <div className="font-maven-pro text-xl ml-2 mt-2 font-medium">
                                Abdelilah AYACHE
                            </div>
                        </div>
                        <textarea className="w-[90%] h-[25vh] outline-0 resize-none mt-[6%] ml-auto mr-auto pr-[3%] text-2xl pl-[3%] " placeholder="Express your feelings..."/>
                        <div className="w-[90%] h-[8vh] border border-gray-300 ml-auto mr-auto flex">
                            <div className="font-maven-pro text-xl text-black font-normal mt-auto mb-auto ml-[2%]">
                                Add to your post :
                            </div>
                            <div className="mt-auto mb-auto flex ml-auto mr-[2%]">
                                <img src="media.svg" className="h-[4vh] w-[4vw] cursor-pointer hover:opacity-75" alt="photo/video" title="photo/video"/>
                                <img src="Calendar.svg" className="h-[4vh] w-[4vw] cursor-pointer hover:opacity-75" alt="event" title="event"/>
                            </div>
                        </div>
                        <button className="flex w-[90%] h-[8vh] ml-auto mr-auto mt-[3vh] mb-[3vh] rounded-xl bg-[#246195]">
                            <div className="font-maven-pro text-white ml-auto mr-auto font-semibold mt-auto mb-auto">Post</div>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

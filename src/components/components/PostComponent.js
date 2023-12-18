import React, {useState} from "react";

export default function Post({likeNumber,user,imageUrl,caption,commentNumber}){

    const [like, setLike] = useState("false");
    const [postLikeNumber, setPostLikeNumber] = useState(likeNumber);


    const likePost = () => {
        setLike((prev) => !prev);
        setPostLikeNumber((prevLikeNumber) => (like ? prevLikeNumber + 1 : prevLikeNumber - 1));
    }

    return(
            <div className="rounded-2xl bg-white w-[47%] h-[80vh] ml-auto mr-auto mt-auto mb-auto border border-gray-400">
                <div className="flex">
                    <img src="sanji.jpg" className="ml-[1vw] mt-[4vh] w-[10%] h-[15%] rounded-full border border-r-1 border-r-[#A8A6A6]"/>
                    <div className="flex-row">
                        <div className="text-black font-roboto text-l font-bold mt-[4vh] ml-4">
                            Abdelilah AYACHE
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-4 mt-[-0.5vh]">
                            Membre du club emi-khayr
                        </div>
                        <div className="text-gray-600 font-roboto text-sm font-medium ml-4 mt-[-0.5vh]">
                            4 sem
                        </div>
                    </div>
                </div>
                <div className="text-black font-roboto text-base font-medium ml-[3vw] mr-[3vw] mt-[2vh]">
                    Hello everybody i am abdelilah ayache that is fucking youssef oudourouch right now in the class
                </div>
                <img src="R.jpg" className="w-[90%] h-[50%] ml-[5%] mr-[5%] mt-[2vh]"/>
                <div className="flex ml-[6%] mt-[2vh]">
                    <img src="heart.svg"/>
                    <div className="text-black font-roboto text-sm font-bold ml-[1%]">{postLikeNumber}</div>
                    <img src="cmnt.svg" className="ml-[3%]"/>
                    <div className="text-black font-roboto text-sm font-bold ml-[1%]">25</div>
                </div>
                <div className="bg-[#A8A6A6] w-[100%] h-[2px] mt-[2%]"></div>
                <div className="flex mt-[2vh] ml-[3vw] gap-[20%] mb-[2vh]">
                    <div className="flex">
                        {like?
                            <img src="heart_gray.svg" className="h-[4vh] w-[4vw] cursor-pointer" onClick={likePost}/>:
                            <img src="heart.svg" className="h-[4vh] w-[4vw] cursor-pointer" onClick={likePost}/>
                        }
                        <div className="text-black font-roboto text-sm font-bold">
                            Like
                        </div>
                    </div>
                    <div className="flex">
                        <img src="comment.svg" className="h-[4vh] w-[4vw]"/>
                        <div className="text-black font-roboto text-sm font-bold">
                            Comment
                        </div>
                    </div>
                    <div className="flex">
                        <img src="share.svg" className="h-[4vh] w-[4vw]"/>
                        <div className="text-black font-roboto text-sm font-bold">
                            Share
                        </div>
                    </div>
                </div>
            </div>
    )
}
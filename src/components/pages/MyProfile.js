import {React} from "react"
import Post from "../components/PostComponent";
import NavigationBar from "../components/NavigationBar";

export default function MyProfile() {
    return(
        <div className="overflow-x-hidden">
            <NavigationBar></NavigationBar>
            <div className="w-[100vw] bg-white h-[90hv] text-black mt-[10vh] flex flex-wrap ">
                    <div className="w-[95%] h-[30hv] ml-auto mr-auto rounded-3xl bg-[#427AA1] inline-block mt-[2vh]">
                        <div className=" w-[100%] h-[50%] bg-gray-300 rounded-t-3xl flex">
                            <div className="z-10 h-[20vh] w-[10vw] border border-black rounded-full bg-gray-300 relative mt-[5%] ml-[2vw]">
                                <img src="img_2.png" className="rounded-full h-full w-full"/>
                            </div>
                            <img src="img_5.png" className="w-[95vw] h-[21vh] absolute rounded-t-3xl"/>
                        </div>
                        <div className="text-white font-maven-pro font-semibold text-2xl ml-[14vw] mt-[2vh]">
                            Abdelilah AYACHE
                        </div>
                        <div className="text-white font-maven-pro font-semibold text-xl ml-[14vw]">
                            Membre de club emi-khayr
                        </div>

                    </div>
                    <div className="w-[95%] h-[43%] mt-[4vh] border border-gray-600 ml-auto mr-auto rounded-2xl block p-2 pl-6">
                        <div className="w-[100%] flex gap-[8%]">
                        <div className="inline-block">
                            <div className="font-maven-pro font-semibold text-black text-xl">
                                Posts
                            </div>
                            <div className="w-[5vw] bg-[#246195] h-[0.7vh] ml-[-0.4vw]"></div>
                            </div>

                                <div className="font-maven-pro font-semibold text-black text-xl">
                                    Evenements
                                </div>

                                <div className="font-maven-pro font-semibold text-black text-xl">
                                    About
                                </div>

                        </div>
                        <div className="mt-[4vh] mb-[2vh]">
                            <Post
                                likeNumber={0}
                                caption={"Today i have seen 2 children that has no home and nothing to eat and i bring them to my house until i " +
                                    "find an association to hold those kids so im writing this post to find one for them please if you know " +
                                    "an association mention it in the comment."}
                                logo={"img_2.png"}
                                imageUrl={"children.jpg"}
                                user={"Abdelilah AYACHE"}
                                time={"2 min"}
                                commentNumber={0}
                                info={"Membre du club emi-khayr"}
                            ></Post>
                        </div>
                </div>
            </div>
        </div>
    )
}
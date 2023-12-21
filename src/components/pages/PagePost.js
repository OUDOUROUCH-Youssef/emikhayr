import React, {useState} from "react";
import NavigationBar from "../components/NavigationBar";
import ProfileHolder from "../components/ProfileHolder";
import Notification from "../components/Notification";
import NewPost from "../components/NewPost";
import SuggestionHolder from "../components/SuggestionHolder";
import Post from "../components/PostComponent";
import {useNavigate} from "react-router-dom";

export default function PagePost(){

    const divs = Array.from({ length: 10 }, (_, index) => (
        <Post likeNumber={120}></Post>
    ));

    const [showOptions, setShowOptions] = useState(false);

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };

    let navigate = useNavigate();


    return(
        <div>
            <div>
                <NavigationBar onBellClick={handleButtonClick}></NavigationBar>
                <ProfileHolder></ProfileHolder>
                <Notification showOption={showOptions} onClickButton={handleButtonClick}></Notification>
                <div className="inline-grid w-[100vw] mt-[10vh] pl-[4vw] gap-y-4 pt-10 h-[88vh] overflow-y-scroll">
                    <NewPost></NewPost>
                    {divs}
                </div>
                <SuggestionHolder></SuggestionHolder>
            </div>
        </div>
    )
}
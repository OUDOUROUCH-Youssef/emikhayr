import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ProfileHolder from "../components/ProfileHolder";
import Notification from "../components/Notification";
import NewPost from "../components/NewPost";
import SuggestionHolder from "../components/SuggestionHolder";
import Post from "../components/PostComponent";
import { useNavigate } from "react-router-dom";

export default function PagePost() {

    const [posts, setPosts] = useState([
        {
            likeNumber: 150,
            user: "Emi Khayr",
            imageUrl: "img_1.png",
            caption:
                "Nous sommes ravis d'annoncer la venue exceptionnelle de Madame Benayada , coach renommée, honorera de sa présence une conférence exceptionnelle dédiée au partage d'inspirations et de connaissances.",
            commentNumber: 20,
            info:"United we are",
            logo:"https://pre00.deviantart.net/bbbc/th/pre/f/2012/220/c/c/emi_khayr_by_linz7-d5a9xwi.png",
            time:"1 week",
        },
        {
            likeNumber: 126,
            user: "Emi Khayr",
            imageUrl: "img.png",
            caption:
                "Échange d'idées et solidarité en action : le forum social, un espace où les voix se rencontrent pour façonner un avenir commun. Sous le thème « Solidarité Engagée : Jeunesse, Innovation Sociale et Avenir Durable ».",
            commentNumber: 12,
            info:"United we are",
            logo:"https://pre00.deviantart.net/bbbc/th/pre/f/2012/220/c/c/emi_khayr_by_linz7-d5a9xwi.png",
            time:"5 min"
        },
    ]);

    const addPost = (newPost) => {
        setPosts((prevPosts) => [...prevPosts, newPost]);
    };

    const divs = [];
    const postsLength = posts.length;

    for (let index = postsLength - 1; index >= 0; index--) {
        const post = posts[index];
        divs.push(<Post key={index} {...post} />);
    }


    const [showOptions, setShowOptions] = useState(false);

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
    };

    let navigate = useNavigate();

    return (
        <div>
            <div>
                <NavigationBar onBellClick={handleButtonClick}></NavigationBar>
                <ProfileHolder></ProfileHolder>
                <Notification
                    showOption={showOptions}
                    onClickButton={handleButtonClick}
                ></Notification>
                <div className="inline-grid w-[100vw] mt-[10vh] pl-[4vw] gap-y-4 pt-10 h-[88vh] overflow-y-scroll">
                    <NewPost onPost={addPost}></NewPost>
                    {divs}
                </div>
                <SuggestionHolder></SuggestionHolder>
            </div>
        </div>
    );
}

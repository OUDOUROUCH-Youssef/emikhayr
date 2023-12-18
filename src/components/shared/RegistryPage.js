import React, {useState} from "react";
import BlueLayer from "./BlueLayer";
import WhiteLayer from "./WhiteLayer";

export default function RegistryPage({children,bitTitle,place1,place2}) {

    const [logIn, setLogIn] = useState(true);
    const [big,setbig] = useState("Se connecter");
    const [placeHolder1, setPlaceHolder1] = useState("Email");
    const [placeHolder2,setPlaceHolder2] = useState("Mot de passe");
    const [miniTitle,setMiniTitle] = useState("Rejoignez notre communauté et explorez un univers de possibilités");
    const [title,setTitle] = useState("Nouveau ici ?");
    const [but,setBut] = useState("S’inscrire");
    const [type1,setType1] = useState("email");
    const [type2,setType2] = useState("password");

    const toggleView = () => {
        setLogIn((prev) => !prev);
        toggleTitles();
    };

    const toggleTitles = () => {
        if (logIn) {
            setbig("S’inscrire");
            setPlaceHolder1("Username");
            setPlaceHolder2("Email");
            setMiniTitle(" Connectez-vous pour explorer un monde de possibilités");
            setTitle("Déjà inscrit ?");
            setBut("Se connecter");
            setType2("email");
            setType1();
        } else {
            setbig("Se connecter");
            setPlaceHolder1("Email");
            setPlaceHolder2("Mot de passe");
            setMiniTitle("Rejoignez notre communauté et explorez un univers de possibilités");
            setTitle("Nouveau ici ?");
            setBut("S’inscrire");
            setType2("password");
            setType1("email");
        }
    };



    return(
        <div className="flex w-[100vw] h-[100vh] bg-white">
            <div className="h-[100vh] w-[65vw] grid">
                <WhiteLayer isLogIn={logIn} bigTitle={big} place1={placeHolder1} place2={placeHolder2} type1={type1} type2={type2}></WhiteLayer>
            </div>
            <div className="w-[35vw] h-[100vh] bg-[#246195] ml-auto">
                    <BlueLayer miniTitle={miniTitle} title={title}>
                        <button className="rounded-full bg-white p-4 mt-[30vh] w-[50%] ml-[25%]" onClick={toggleView}>
                            <div className="text-center font-inter text-blue-800 text-lg font-extrabold pl-[2vw] pr-[2vw]">
                                {but}
                            </div>
                        </button>
                    </BlueLayer>
            </div>
        </div>
    )
}
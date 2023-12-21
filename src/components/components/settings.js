import React from "react";
import {useNavigate} from "react-router-dom";
import NavigationBar from "./NavigationBar";

export default function Settings() {

    let navigate = useNavigate();
    const navigateToForm = (event) => {
        event.preventDefault();
        return navigate("/association-form");
    }


    return(
        <div>
        <NavigationBar></NavigationBar>
        <div className="pt-[5vh] pl-5 fixed mt-[10vh] w-[30vw] h-[90vh] border-r border-gray-500">
            <div className="flex">
                <img src="sanji.jpg" className="ml-[1vw] w-[5vw] h-[10vh] rounded-full border border-r-1 border-r-[#A8A6A6]"/>
                <div className=""> Nom et prenom</div>
            </div>
            <div className="bg-white h-[70vh] w-[28vw] rounded-3xl">
                <div className="text-black text-center font-roboto text-base font-medium mr-[46%] mt-[1vh]">Information personnel</div>
                <div className="flex">
                    <div className="flex-row">
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2 hover:text-[#064789] cursor-pointer">
                        Modifier le user name ou adresse mail
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2 hover:text-[#064789] cursor-pointer">
                        Modifier le mot de passe
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2 hover:text-[#064789] cursor-pointer">
                        Completer le profil
                        </div>
                    </div>
                </div>
                <div className="text-black text-center font-roboto text-base font-medium mr-[55%] mt-[1vh]">Preference de site</div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2 hover:text-[#064789] cursor-pointer">
                            Langues
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2 hover:text-[#064789] cursor-pointer">
                            Mode sombre
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2 hover:text-[#064789] cursor-pointer">
                            Gestion des notifications
                        </div>
                <div className="text-black text-center font-roboto text-base font-medium mr-[50%] mt-[1vh]">Creer une association</div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2 cursor-pointer hover:text-[#064789]" onClick={navigateToForm}>
                            Remplir le formulaire
                        </div>
            </div>
        </div>
        </div>
    )
}
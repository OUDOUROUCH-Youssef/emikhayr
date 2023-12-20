import React from "react";

export default function Settings() {
    const events=[{user:"EmiKhayr",event:"organise l'action de don de sang",timeDecole:"maintenent"},
        {user:"EmiKhayr",event:"organise la premiere edition de forum social",timeDecole:"2 jours"},
    {user:"EmiKhayr",event:"organise la premiere edition de forum social",timeDecole:"1 semaine"}];
    return(
        <div className="pt-[9vh] ml-[2vw] pl-10 fixed">
            <div>
                <img src="sanji.jpg" className="ml-[1vw] mt-[4vh] w-[10%] h-[15%] rounded-full border border-r-1 border-r-[#A8A6A6]"/>
            </div>
            <div className="bg-white h-[70vh] w-[30vw] rounded-3xl">
                <div className="text-black text-center font-roboto text-base font-medium mr-[50%] mt-[1vh]">Information personnel</div>
                <div className="flex">
                    <div className="flex-row">
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2">
                        Modifier le user name ou adresse mail
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2">
                        Modifier le mot de passe
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2">
                        Completer le profil
                        </div>
                    </div>
                </div>
                <div className="text-black text-center font-roboto text-base font-medium mr-[50%] mt-[1vh]">Preference de site</div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2 ">
                            Langues
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2">
                            Mode sombre
                        </div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2">
                            Gestion des notifications
                        </div>
                <div className="text-black text-center font-roboto text-base font-medium mr-[50%] mt-[1vh]">Creer une association</div>
                        <div className="text-gray-400 font-roboto text-base font-bold ml-2">
                            Remplir le formulaire
                        </div>
            </div>
        </div>
    )
}
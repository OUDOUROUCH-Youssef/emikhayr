import React, { useState, useEffect }from "react";
import './HomePage.css';
import logo from "../Images/khayrLogo.png";
import img1 from "../Images/Image1.png";
import img2 from "../Images/Image2.png";
import img3 from "../Images/Image3.png";


const HomePage = () => {
    const [currentImage, setCurrentImage] = useState(img1);

    useEffect(() => {
        const imageList = [img1, img2, img3];
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % imageList.length;
            setCurrentImage(imageList[currentIndex]);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
    <div id="HomePage">
      <header>
        <img src="khayrconnect;logo.svg" className="h-[8vh] w-[6vw] mt-auto mb-auto ml-[3vw]"/>
        <p>Khayr<span>Connect</span></p>
        <button >Nous rejoindre</button>
      </header>
      <div id="Gauche">
        <p id="Aproposdenous">A PROPOS DE NOUS</p>
        <p id="Titre">KhayrConnect : La plateforme qui met en relation Bénévoles et Associations pour un impact collectif</p>
        <p id="Description">Bienvenue sur  KhayrConnect, la plateforme qui rapproche les associations sociales des bénévoles. Ici, la collaboration devient simple. Connectez-vous pour en savoir plus sur les évènements à venir. Construisons un avenir solidaire dès aujourd'hui !</p>
        <button>Nous rejoindre</button>
      </div>
        <div id="Droite">
            <img src={currentImage} />
        </div>
    </div>
  )
}

export default HomePage
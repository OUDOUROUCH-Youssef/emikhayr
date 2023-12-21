import React, {useState} from "react";
import NavigationBar from "../components/NavigationBar";

export default function AssociationForm(){

    const [text, setText] = useState('');

    const [associationName, setAssociationName] = useState("Association Name")
    const [description, setDescription] = useState("Description")
    const [adress, setAdress] = useState("Adress")
    const [city, setCity] = useState(" City")
    const [facebookLink, setFacebookLink] = useState("")
    const [instagramLink, setInstagramLink] = useState("")
    const [phone, setPhone] = useState("Telephone")

    const telephoneChange = (event) => {
        setPhone(event.target.value);
        if(event.target.value===""){
            setPhone("Telephone")
        }
    }

    const associationChange = (event) => {
        setAssociationName(event.target.value);
        if(event.target.value===""){
            setAssociationName("Association Name")
        }
    }
    const descriptionChange = (event) => {
        setDescription(event.target.value);
        setText(event.target.value);
        if(event.target.value===""){
            setDescription("Description")
        }
    }
    const adressChange = (event) => {
        setAdress(event.target.value);
        if(event.target.value===""){
            setAdress("Adress")
        }
    }
    const cityChange = (event) => {
        setCity(event.target.value);
        if(event.target.value===""){
            setCity(" City")
        }
    }
    const facebookChange = (event) => {
        setFacebookLink(event.target.value);
    }
    const instagramChange = (event) => {
        setInstagramLink(event.target.value);
    }

    const handleInputChange = (event) => {
        setText(event.target.value);
    };
    return(
        <div>
            <NavigationBar/>
            <div className="flex">
                <div className="inline-block bg-white h-[90vh] w-[25vw] mt-[10vh] pl-[1%] pr-[1%] border-r border-gray-600 overflow-y-scroll overflow-x-hidden pb-[2vh]">
                    <div className="text-black text-centre font-maven-pro text-base font-semibold mt-[1vh]">
                        Creer une association
                    </div>
                    <div className="text-gray-400 font-maven-pro text-base font-bold ml-2 text-justify">
                        Les benevole et autres associations peuvent acceder a votre page pour en savoir plus sur vous
                    </div>
                    <div className="font-maven-pro text-l font-semibold text-[#246195]">
                        About
                    </div>
                    <div className="font-maven-pro text-l ">
                        Are you
                    </div>
                    <div className="gap-[15%] w-[100%] mb-[2vh] ml-[2vw]">
                        <div className="flex gap-[2%]">
                            <input type="radio" name="gender" value="club"/>
                            <div>Club</div>
                        </div>
                        <div className="flex gap-[2%]">
                            <input type="radio" name="gender" value="association"/>
                            <div>Association</div>
                        </div>
                    </div>
                    <div className="w-[85%]">
                        <input type="text" placeholder="Association name" className="w-full p-2 rounded-[10px] border border-gray-600 bg-transparent" onChange={associationChange}/>
                    </div>
                    <div className="w-[85%] mt-[2vh] max-h-[20vh]">
                         <textarea
                             className="w-full h-full resize-none border p-2 overflow-y-auto whitespace-normal rounded-[10px] border-gray-600 bg-transparent"
                             value={text}
                             onChange={descriptionChange}
                             placeholder="Description"
                         />
                    </div>
                    <input type="file" placeholder="Import logo" className="mt-[2vh]"/>
                    <input type="file" placeholder="Import the cover photo" className="mt-[2vh]"/>
                    <div className="w-[85%] mt-[2vh]">
                         <input
                             className="w-full p-2 resize-none border  overflow-y-auto whitespace-normal rounded-[10px] border-gray-600 bg-transparent"
                             type="text"
                             placeholder="Adress"
                             onChange={adressChange}
                         />
                    </div>
                    <div className="w-[85%] mt-[2vh]">
                        <input
                            className="w-full p-2 resize-none  overflow-y-auto whitespace-normal rounded-[10px] border border-gray-600 bg-transparent"
                            type="text"
                            placeholder="City"
                            onChange={cityChange}
                        />
                    </div>
                    <div className="w-[85%] mt-[2vh]">
                        <input
                            className="w-full p-2 resize-none  overflow-y-auto whitespace-normal rounded-[10px] border border-gray-600 bg-transparent"
                            type="tel"
                            placeholder="0614545831"
                            onChange={telephoneChange}
                        />
                    </div>
                    <div className="font-maven-pro text-l font-semibold text-[#246195] mt-[4vh]">
                        Social Media
                    </div>
                    <div className="w-[85%] mt-[2vh]">
                        <input
                            className="w-full p-2 resize-none border border-gray-600 bg-transparent overflow-y-auto whitespace-normal rounded-[10px]"
                            type="text"
                            placeholder="Facebook Link"
                            onChange={facebookChange}
                        />
                        <img src="link.svg" className="h-[4vh] w-[2vw] mt-[-5vh] ml-auto mr-[0.7vw] cursor-pointer"/>
                    </div>
                    <div className="w-[85%] mt-[2vh]">
                        <input
                            className="w-full p-2 resize-none border border-gray-600 bg-transparent overflow-y-auto whitespace-normal rounded-[10px]"
                            type="text"
                            placeholder="Instagram Link"
                            onChange={instagramChange}
                        />
                        <img src="link.svg" className="h-[4vh] w-[2vw] mt-[-5vh] ml-auto mr-[0.7vw] cursor-pointer"/>
                    </div>
                    <div className="font-maven-pro text-l font-semibold text-[#246195] mt-[4vh]">
                        Activities
                    </div>
                    <div className="flex flex-wrap ml-auto mr-auto w-[95%] gap-[4%] gap-y-4">
                        <button className="bg-[#8CBADA] h-[5vh] w-[30%] rounded-full">
                            <div className="font-maven-pro font-medium text-sm text-white">
                                Activity 1
                            </div>
                        </button>
                        <button className="bg-[#A8A6A6] h-[5vh] w-[30%] rounded-full">
                            <div className="font-maven-pro font-medium text-sm text-white">
                                Activity 2
                            </div>
                        </button>
                        <button className="bg-[#8CBADA] h-[5vh] w-[30%] rounded-full">
                            <div className="font-maven-pro font-medium text-sm text-white">
                                Activity 3
                            </div>
                        </button>
                        <button className="bg-[#A8A6A6] h-[5vh] w-[30%] rounded-full">
                            <div className="font-maven-pro font-medium text-sm text-white">
                                Activity 4
                            </div>
                        </button>
                        <button className="bg-[#8CBADA] h-[5vh] w-[30%] rounded-full">
                            <div className="font-maven-pro font-medium text-sm text-white">
                                Activity 5
                            </div>
                        </button>
                    </div>
                </div>
                <div className="w-[75vw] bg-white h-[90hv] text-black mt-[10vh] flex flex-wrap">
                    <div className="font-maven-pro font-semibold text-black ml-[2vw] text-2xl mt-[4vh] mb-[2vh]">
                        Your page view
                    </div>
                    <div className="w-[90%] h-[40%] ml-auto mr-auto rounded-3xl bg-[#427AA1] inline-block">
                        <div className=" w-[100%] h-[50%] bg-gray-300 rounded-t-3xl flex">
                            <div className="h-[20vh] w-[10vw] border border-black rounded-full bg-gray-300 relative mt-[5%] ml-[2vw]">

                            </div>
                        </div>
                        <div className="text-white font-maven-pro font-semibold text-2xl ml-[14vw] mt-[2vh]">
                            {associationName}
                        </div>
                        <div className="text-white font-maven-pro font-semibold text-xl ml-[14vw]">
                            {description}
                        </div>
                        <button className="rounded-full bg-white w-[10%] h-[12%] ml-[21%] mt-[1vh] border border-gray-600">
                            <div className="font-maven-pro font-semibold text-[#427AA1]">
                                + Follow
                            </div>
                        </button>
                    </div>
                    <div className="w-[90%] h-[43%] border border-gray-600 ml-auto mr-auto rounded-2xl flex flex-wrap p-2 pl-6">
                        <div className="w-[100%] h-[6vh] flex gap-[8%]">
                            <div className="font-maven-pro font-semibold text-black text-xl">
                                Posts
                            </div>
                            <div className="font-maven-pro font-semibold text-black text-xl">
                                Evenements
                            </div>
                            <div className="inline-block">
                                <div className="font-maven-pro font-semibold text-black text-xl">
                                    About
                                </div>
                                <div className="w-[5vw] bg-[#246195] h-[0.7vh] ml-[-0.4vw]"></div>
                            </div>

                        </div>
                        <div className="w-[40%] inline-block mb-[5vh]">
                            <div className="font-maven-pro text-l font-semibold text-xl text-[#246195]">
                                Coodrdonation
                            </div>
                            <div className="flex">
                                <img src="position.svg" className="h-[5vh] w-[3vw]"/>
                                <div className="font-maven-pro font-medium text-l mt-auto mb-auto ml-[1vw]"> {adress}, {city}</div>
                            </div>
                            <div className="flex">
                                <img src="phone.svg" className="h-[5vh] w-[3vw]"/>
                                <div className="font-maven-pro font-medium text-l mt-auto mb-auto ml-[1vw]">{phone}</div>
                            </div>
                            <div className="font-maven-pro text-l font-semibold text-xl text-[#246195]">
                                Activities
                            </div>
                            <div className="font-maven-pro font-medium text-l mt-auto mb-auto ml-[1vw]"> Activity 1,Activity 3,Activity 5</div>
                        </div>

                        <div className="w-[40%] inline-block">
                            <div className="font-maven-pro font-semibold text-xl text-[#246195]">
                                Social Media
                            </div>
                            <div className="flex mt-[2vh]">
                                <img src="instagram.svg" className="h-[4vh] w-[2vw]"/>
                                <a className="font-maven-pro font-medium text-l mt-auto mb-auto ml-[1vw] hover:text-[#064789]" href={instagramLink}>
                                    Instagram
                                </a>
                            </div>
                            <div className="flex mt-[2vh]">
                                <img src="facebook.svg" className="h-[4vh] w-[2vw]" />
                                <a className="font-maven-pro font-medium text-l mt-auto mb-auto ml-[1vw] hover:text-[#064789]" href={facebookLink}>
                                    Facebook
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
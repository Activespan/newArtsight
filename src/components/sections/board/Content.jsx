import React, { Component, Fragment } from "react";
import Aram from "../../../assets/img/board/Aram Hovhannisyan.png"
import Nazaret from "../../../assets/img/board/Nazaret Karoyan.png"
import Ralf from "../../../assets/img/board/Ralf.png"
import Zara from "../../../assets/img/board/zara-zeituntsyan.png"
import Davit from "../../../assets/img/board/Mosinyan_AEW23 copy.png"
import Sona from "../../../assets/img/board/Sona Harutyunyan copy.png"
import Placeholder from "../../../assets/img/board/placeholder.webp"

import Team from "../home/Team";

class Content extends Component {
    render() {
        const members = [{
            img:Aram,
            name: "Aram Hovhannisyan",
            description: "Is a composer, has garnered international recognition with awards, commissions from prestigious ensembles, and\n" +
                "has played a significant role in the music scene as the co-founder of \"QuarterTone,\" the artistic director of the\n" +
                "\"Crossroads\" contemporary music festival, and vice-rector at Yerevan Komitas State Conservatory."
        }, {
            img:Nazaret,
            name:"Nazaret Karoyan",
            description: "An art critic and curator, played a pivotal role in shaping Armenia's contemporary art scene since the 1980s. As a founder of AICA-Armenia, president, and curator of numerous exhibitions, he actively contributed to the institutionalization of contemporary art, fostering cooperation with Europe"
        },
        {
            img:Ralf,
            name: "Ralf Bäcker",
            description: "Is a dedicated storyteller through the lens, enabling individuals to articulate their narratives through the impactful language of images. From documenting the aftermath of war in northern Iraq to fostering participatory photography in Ethiopia, his aim is to bring these powerful stories back to the communities that inspired them."
        },
        {
                img: Zara,
                name: "Zara Zeituntsian",
                description: "With a diverse background spanning international finance, non-profit management, and academia, boasts\n" +
                    "entrepreneurial and marketing leadership experience in the United States, Russia, and Armenia. served as the\n" +
                    "inaugural Chair of Armenia's State Tourism Committee, currently - a lecturer at the American University of Armenia"
        },
        {
                img:Davit,
                name:"Davit Mosinyan",
                description: "Holds the title of a doctor in philosophical sciences and is an associate professor at the YSU Department of History\n" +
                    "and Philosophy. His work has been presented at international conferences in various countries. Mosinyan's\n" +
                    "academic interests span the philosophy of history, diaspora theory, and aesthetics."
        },
        {
            img:Sona,
            name:"Sona Harutyunyan",
            description: "Is a dedicated storyteller through the lens, enabling individuals to articulate their narratives through the impactful language of images. From documenting the aftermath of war in northern Iraq to fostering participatory photography in Ethiopia, his aim is to bring these powerful stories back to the communities that inspired them."
        },
        {
            img:Placeholder,
            name:"xxxxxxxxxxxxxxxxxxxxxxxxx ",
            description: "Is a dedicated storyteller through the lens, enabling individuals to articulate their narratives through the\n" +
                "impactful language of images. From documenting the aftermath of war in northern Iraq to fostering participatory\n" +
                "photography in Ethiopia, his aim is to bring these powerful stories back to the communities that inspired them."
        },
        {
            img:Placeholder,
            name:"Armine&Ashot Snkhchyans",
            description: "Is a dedicated storyteller through the lens, enabling individuals to articulate their narratives through the\n" +
                "impactful language of images. From documenting the aftermath of war in northern Iraq to fostering participatory\n" +
                "photography in Ethiopia, his aim is to bring these powerful stories back to the communities that inspired them"
        },
        {
            img:Placeholder,
            name:"Marina Hakobyan",
            description: "Graduated from the State Academy of Fine Arts. Since 2006, she has been a member of the Union of Artists of Armenia. Since 2016, she has served as a lecturer at the Department of Art History and Theory at the State Academy of Fine Arts of Armenia. As of 2020, she assumed the role of director at the National Gallery of Armenia."
        }
        ]
        return (
            <Fragment>
                <div className={"board-banner"}></div>
                <Team />
                <div className={"members"}>
                    {members.map((member, id) => {
                        return <div className={"member"}>
                            <img src={member.img}  alt={""} className={"member-img"} />
                            <div className={"member-info"}>
                                <h3>{member.name}</h3>
                                <h5>
                                    {member.description}
                                </h5>
                            </div>
                        </div>

                    })}
                </div>


            </Fragment>
        );
    }
}

export default Content;

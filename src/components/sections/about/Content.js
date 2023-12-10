import React, { Component, Fragment } from "react";
import Hrach from "../../../assets/img/founders/HV2.png"
import Avo from "../../../assets/img/founders/AV.png"
import Logo from "../../../assets/img/img_logo.png"

class Content extends Component {
  render() {
    const whys = [
        {
            title:"why?",
            text: "We believe in the spiritual power of art to awaken the soul, inspire, and foster profound connections. Art is a sacred language, and we aim to facilitate this spiritual dialogue between artists, art lovers, and divine inspiration"
        },

        {
            title:"what?",
            text: "We connect artists and art lovers through the power of insight. We believe that art is a unique way of recognizing the reality,\n" +
                "and we want to make it easier for people to connect with art that speaks to them."
        },

        {
            title:"how?",
            text: "By providing a variety of features that allow artists to share their work with a wider audience, get feedback from art critics, and connect with potential buyers and renters."
        }

    ]
    return (
      <Fragment>
          <div className={"about"}>
              <h1 style={{fontFamily:"'Cinzel', serif", color:"#003fff"}}>ARTINSIGHT</h1>
              <h2 style={{fontFamily:"'Montserrat', sans-serif"}}>
                  is a result of a deep belief, that
                  art has the power to transcend
                  boundaries, ignite emotions,
                  and foster connections
              </h2>
          </div>
          {whys.map((why, id) => {
            return   <div className={"why-container"}>
                  <div className={"why"}>
                      <h4 style={{fontFamily:"'Cinzel', serif"}}>{why.title}</h4>
                      <h5 style={{fontFamily:"'Montserrat', sans-serif"}}>
                          {why.text}
                      </h5>
                  </div>
              </div>
          })}

          <div className="founders">
            <h1 style={{fontFamily:"'Cinzel', serif"}}><u>FOUNDERS</u></h1>
              <div className={"founders-container"}>
                  <div className={"founder"}>
                      <img src={Hrach} alt={""} />
                      <h4 style={{fontFamily:"'Cinzel', serif"}}>hrachya vardanyan</h4>
                  </div>
                  <h1 style={{fontFamily:"'Cinzel', serif"}}>&</h1>
                  <div className={"founder"}>
                      <img src={Avo} alt={""} />
                      <h4 style={{fontFamily:"'Cinzel', serif"}}>avetik vardanyan</h4>
                  </div>
              </div>

          </div>
        <div className={"about-footer"}>
            <img src={Logo} style={{maxWidth:"40%"}} />
            <h5 style={{fontFamily:"'Montserrat', sans-serif"}}>
                We curate a diverse collection of exceptional artworks, connecting artists with a global audience.
                Our platform is a dynamic space where art enthusiasts can discover, appreciate, and engage with creativity.
                Offering innovative art rental options, facilitating artist-critic collaborations, and leveraging technology, we redefine the art experience.
                ArtInsight is more than a platform; it's a gateway to a world where art becomes an accessible, enriching, and integral part of life.
            </h5>
        </div>
      </Fragment>
    );
  }
}

export default Content;

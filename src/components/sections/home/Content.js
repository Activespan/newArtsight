import React, { Component, Fragment } from "react";
import Banner from "./Banner";
import Servicetype from "./Servicetype";
import Team from "./Team";
import Bestsellers from "./Bestsellers";
import Advertisement from "../../layouts/Advertisement";
import Videocta from "../../layouts/Videocta";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        {/*<Team />*/}
        {/*<Bestsellers />*/}
          <div className={"home-title"}>
              <h2>ArtInsight is a platform that:</h2>
          </div>
          <div className={"collapse-1"}>
              <b><h3 style={{fontFamily:"'Cinzel', serif"}}>connects artists and art lovers:</h3></b>
              <h5 style={{fontFamily:"'Montserrat', sans-serif"}}>We provide a space for artists to showcase their work to a global audience, making it easy for art enthusiasts
                  to discover and appreciate exceptional art.
              </h5>
          </div>
          <div className={"collapse-1"}>
              <b><h3 style={{fontFamily:"'Cinzel', serif"}}>curates exceptional art:</h3></b>
              <h5 style={{fontFamily:"'Montserrat', sans-serif"}}>our quality assurance board carefully selects and curates artworks, ensuring
                  that each piece reflects the pinnacle of artistic achievement
              </h5>
          </div>
          <div className={"collapse-1"}>
              <b><h3 style={{fontFamily:"'Cinzel', serif"}}>offers unique rental options:</h3></b>
              <h5 style={{fontFamily:"'Montserrat', sans-serif"}}>we offer the opportunity to rent artworks, allowing individuals and businesses to experience art
                  in a way that suits their needs, whether for personal enjoyment or special occasions
              </h5>
          </div>

        <Videocta />
        <Advertisement />
      </Fragment>
    );
  }
}

export default Content;

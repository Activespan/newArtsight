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
              <b><h3>Connects Artists and Art Lovers:</h3></b>
              <h5>We provide a space for artists to showcase their work to a global audience, making it easy for art enthusiasts
                  to discover and appreciate exceptional art.
              </h5>
          </div>
          <div className={"collapse-container"}>
              <div className={"collap"}>
                  <b><h3>Connects Artists and Art Lovers:</h3></b>
                  <h5>We provide a space for artists to showcase their work to a global audience, making it easy for art enthusiasts
                      to discover and appreciate exceptional art.
                  </h5>
              </div>
              <hr />
              <div className={"collap"}>
                  <b><h3>Connects Artists and Art Lovers:</h3></b>
                  <h5>We provide a space for artists to showcase their work to a global audience, making it easy for art enthusiasts
                      to discover and appreciate exceptional art.
                  </h5>
              </div>
          </div>
        <Videocta />
        <Advertisement />
      </Fragment>
    );
  }
}

export default Content;

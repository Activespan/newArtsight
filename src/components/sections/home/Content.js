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
        <Servicetype />
        <Team />
        <Bestsellers />
        <Videocta />
        <Advertisement />
      </Fragment>
    );
  }
}

export default Content;

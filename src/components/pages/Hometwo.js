import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Topbar from "../layouts/Topbar";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Newsletter from "../layouts/Newsletter";
import Content from "../sections/home-two/Content";

const pagelocation = "Homepage";

class Hometwo extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Nina - Museum & Shop - React Template | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Topbar />
        <Header />
        <Content />

        <Footer />
      </Fragment>
    );
  }
}

export default Hometwo;

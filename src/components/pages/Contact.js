import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Newsletter from "../layouts/Newsletter";
import Breadcrumb from "../layouts/Breadcrumbs";
import Content from "../sections/contact/Content";

const pagelocation = "Contact Us";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Nina - Museum & Shop - React Template | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
        <Content />

        <Footer />
      </Fragment>
    );
  }
}

export default Contact;

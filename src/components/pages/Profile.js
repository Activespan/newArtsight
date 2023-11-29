import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumbs";
import Content from "../sections/profile/Content";
import Footer from "../layouts/Footer";

class Profile extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Profile page</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: "Profile" }} />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Profile;

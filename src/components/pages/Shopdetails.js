import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumbs";
import Content from "../sections/shop-details/Content";
import Footer from "../layouts/Footer";

const pagelocation = "Product details";

class Shopdetails extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Nina - Museum & Shop - React Template | {pagelocation}</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
        <Content productId={this.props.match.params.id} />
        <Footer />
      </Fragment>
    );
  }
}

export default Shopdetails;

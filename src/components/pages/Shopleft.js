import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Breadcrumb from "../layouts/Breadcrumbs";
import Content from "../sections/shop-left/Content";

const pagelocation = "shop";

class Shopleft extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Shop</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Breadcrumb breadcrumb={{ pagename: pagelocation }} />
        <Content
          catId={this.props.match.params.catId}
          tagId={this.props.match.params.tagId}
          minPrice={this.props.match.params.minPrice}
          maxPrice={this.props.match.params.maxPrice}
        />
        <Footer />
      </Fragment>
    );
  }
}

export default Shopleft;

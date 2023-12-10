import React, { Fragment } from "react";
import AddGalleryContent from "../sections/add-gallery/Content";
import { MetaTags } from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumb from "../layouts/Breadcrumbs";
import Footer from "../layouts/Footer";
const AddGallery = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Add Gallery</title>
        <meta name="description" content="#" />
      </MetaTags>
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "submit" }} />
      <AddGalleryContent />
      <Footer />
    </Fragment>
  );
};

export default AddGallery;

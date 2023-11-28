import React, { Fragment } from "react";
import AddGalleryContent from "../sections/add-gallery/Content";
import { MetaTags } from "react-meta-tags";
import Topbar from "../layouts/Topbar";
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
      <Topbar />
      <Header />
      <Breadcrumb breadcrumb={{ pagename: "Add Gallery" }} />
      <AddGalleryContent />
      <Footer />
    </Fragment>
  );
};

export default AddGallery;

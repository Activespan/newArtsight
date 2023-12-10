import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Content from "../sections/board/Content";


class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Board</title>
                    <meta name="description" content="Board" />
                </MetaTags>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;

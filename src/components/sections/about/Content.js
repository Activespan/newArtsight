import React, { Component, Fragment } from "react";
import Abouttext from "./Abouttext";
import Workprocess from "./Workprocess";
import AboutInfo from "./AboutInfo";

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Abouttext />
        <Workprocess
          title="WHY?"
          type="why"
          text="   We believe in the spiritual power of art to awaken the soul,
                  inspire, and foster profound connections.
                  Art is a sacred language, and we aim to facilitate this
                  spiritual dialogue between artists, art lovers, and divine
                  inspiration."
        />
        <Workprocess
          side="right"
          title="WHAT?"
          type="what"
          text="We connect artists and art lovers through
                  the power of insight. We believe that art is
                  a unique way of recognizing the reality,
                  and we want to make it easier for people
                  to connect with art that speaks to them."
        />
        <Workprocess
          side="left"
          title="HOW?"
          type="how"
          text="By providing a variety of features that
                allow artists to share their work with a
                wider audience, get feedback from art
                critics, and connect with potential buyers
                and renters."
        />
        <AboutInfo />
      </Fragment>
    );
  }
}

export default Content;

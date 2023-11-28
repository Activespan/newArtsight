import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Fragment>
        <div className="time-box">
          <span>
            {days}
            <h6 className="mb-0">Days</h6>
          </span>
        </div>
        <div className="time-box">
          <span>
            {hours}
            <h6 className="mb-0">Hours</h6>
          </span>
        </div>
        <div className="time-box">
          <span>
            {minutes}
            <h6 className="mb-0">Minutes</h6>
          </span>
        </div>
        <div className="time-box">
          <span>
            {seconds}
            <h6 className="mb-0">Seconds</h6>
          </span>
        </div>
      </Fragment>
    );
  }
};

class Advertisement extends Component {
  render() {
    return (
      <section
        className="section-padding advertisement-banner-1 cause-bg center-bg-effect bg-cover"
        style={{
          backgroundImage:
            "url(" + process.env.PUBLIC_URL + "/assets/img/banner/banner5.jpg)",
        }}
      >
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-12">
              <h2 className="we-do-title">what we do?</h2>
              <h5 className="we-do-text">
                ArtInsight transcends boundaries to redefine the art experience.
                We are the bridge between imagination and reality, a platform
                where artists' dreams materialize, and art lovers embark on
                journeys of discovery. With us, art isn't just a canvas; it's a
                universe waiting to be explored.
              </h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Advertisement;

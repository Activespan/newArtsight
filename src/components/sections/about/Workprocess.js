import React, { Component } from "react";

class Workprocess extends Component {
  render() {
    const { title = "", text = "", type = "", side = "left" } = this.props;

    return (
      <section className={`base-section ${type}`}>
        <div className="">
          <div className="row">
            <div
              className={
                side === "right"
                  ? "col-md-6 offset-sm-6 why-left"
                  : "col-md-6  why-left"
              }
            >
              <div className="custom-container section-padding-top section-padding-bottom">
                <h3>{title}</h3>
                <br />
                <br />
                <h5>{text}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Workprocess;

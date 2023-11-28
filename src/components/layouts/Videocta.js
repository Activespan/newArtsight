import React from "react";
import Popuphelper from "../../helper/popuphelper";

class Videocta extends Popuphelper {
  render() {
    return (
      <section
        className="section-padding advertisement-banner-1 what-wedo-bg bg-cover"
        style={{
          backgroundImage:
            "url(" + process.env.PUBLIC_URL + "/assets/img/banner/banner4.jpg)",
        }}
      >
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="graph-container col-12">
              <img
                className="graphic"
                src={process.env.PUBLIC_URL + "/assets/img/banner/graphic.svg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Videocta;

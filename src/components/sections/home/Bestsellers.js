import React, { Component } from "react";

class Bestsellers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalshow: false,
      lastActiveBox: -1,
    };
    this.modalShow = this.modalShow.bind(this);
    this.modalClose = this.modalClose.bind(this);
  }
  // Modal
  modalShow(index) {
    this.setState({ modalshow: true, lastActiveBox: index });
  }
  modalClose() {
    this.setState({ modalshow: false });
  }
  render() {
    return (
      <section className="recent-order section-padding">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-12">
              <div className="author-header">
                <div className="author-left">
                  <img
                    className="author-image"
                    src="https://placehold.co/300x300"
                    alt=""
                  />
                </div>
                <div className="author-right">
                  <div className="author-name-container">
                    <h5>gayane shagoyan</h5>
                    <b>Anthropologist</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <p>
                Gayane Shagoyan is Researcher at the Department of Contemporary
                Anthropological Studies, at the Institute of Archaeology and
                Ethnography, of National Academy of Sciences of Armenia. Gayane
                also is a member of the "Hazarashen" NGO. Presently she is
                consultant in the Scholarship program of
                Heinrich-Böll-Foundation, the reginal office for the South
                Caucasus, to promote young social scientists in the fields of
                contemporary history, sociology and sustainable urban
                development.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Bestsellers;

import React, { Component } from "react";
import { recentProduct } from "../../helper/shophelper";
import { Link, withRouter } from "react-router-dom";

class Shopsidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceFilter: [1, 1000],
      minPrice: 1,
      maxPrice: 0,
    };
  }
  // Price filter
  onPriceChange(event) {
    this.setState({
      minPrice: event.from,
      maxPrice: event.to,
    });
    if (this.state.maxPrice !== 0 && this.state.minPrice !== 0) {
      this.props.history.push(
        `/shop/minPrice=${this.state.minPrice}&maxPrice=${this.state.maxPrice}`
      );
    }
  }
  render() {
    return (
      <div className="side-bar">
        <div className="main-box padding-20 side-shop mb-xl-20">
          <h5 className="text-light-black">Recent Products</h5>
          {recentProduct().map((item, i) => (
            <article className="side-post pb-xl-20 mb-xl-20 u-line" key={i}>
              <div className="thumb-img">
                <Link to={"/shop-details/" + item.id}>
                  <img
                    src={process.env.PUBLIC_URL + "/" + item.image[0]}
                    alt={item.title}
                  />
                </Link>
              </div>
              <div className="content-wrap">
                <div className="entry-meta-content">
                  <h6 className="entry-title">
                    <Link
                      to={"/shop-details/" + item.id}
                      className="text-light-black"
                    >
                      {item.title}
                    </Link>
                  </h6>
                  <div className="entry-tye">
                    <span className="text-light-green fw-600 fs-16">
                      $
                      {new Intl.NumberFormat().format(
                        ((item.price * (100 - item.discount)) / 100).toFixed(2)
                      )}
                    </span>
                    {item.discount > 0 || item.discount !== "" ? (
                      <span className="text-price">
                        ${new Intl.NumberFormat().format(item.price.toFixed(2))}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Shopsidebar);

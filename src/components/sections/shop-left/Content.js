import React from "react";
import { Link } from "react-router-dom";
// import Quickview from "../../layouts/Quickview";
import Sidebar from "../../layouts/Shopsidebar";
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
// import Pagination from "react-js-pagination";
import { useEffect, useState } from "react";

const quickviewtip = <Tooltip>Quick View</Tooltip>;
const wishlisttip = <Tooltip>Add to Wishlist</Tooltip>;

const Content = () => {
  const [firstProducts, setFirstProducts] = useState([]);
  const [secondProducts, setSecondProducts] = useState([]);

  useEffect(() => {
    fetch("http://146.190.165.81:8000/api/v1/pictures")
      .then((response) => response.json())
      .then((data) => {
        setFirstProducts(data.data.first);
        setSecondProducts(data.data.second);
      });
  }, []);

  return (
    <section className="section-padding our-product bg-light-white">
      <div className="container-fluid custom-container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 mb-md-40">
            <Sidebar />
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="full-width">
              <div className="row">
                {firstProducts.map((item, i) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={i}>
                      <div className="product-box mb-md-20">
                        <div className="product-img">
                          <Link to={"/shop-details/" + item.id}>
                            <img
                              src={
                                "http://146.190.165.81:8000/media/" + item.url
                              }
                              className="img-fluid full-width"
                              alt={item.title}
                            />
                          </Link>
                          <div className="button-group">
                            <OverlayTrigger
                              placement="left"
                              overlay={wishlisttip}
                            >
                              <Link to="#">
                                {" "}
                                <i className="pe-7s-like" />{" "}
                              </Link>
                            </OverlayTrigger>
                          </div>
                          {/* <div className="cart-hover">
                  {item.stock === true ? (
                    <button type="button" className="btn-cart fw-600">
                      Add To Cart
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn-cart fw-600"
                      onClick={handleOutofStock}
                    >
                      Add To Cart
                    </button>
                  )}
                </div> */}
                        </div>
                        <div className="product-caption text-center">
                          <div className="product-status">
                            <ul className="product-raised">
                              <li>
                                <strong>Material</strong> {item.material}
                              </li>
                              <li>
                                <strong>Width</strong>
                                <span className="text-highlight">
                                  {item.width}mm
                                </span>
                              </li>
                            </ul>
                            <ul className="product-raised">
                              <li>
                                <strong>Price</strong>
                                {item.sales_value}$
                              </li>
                              <li>
                                <strong>Height</strong>
                                <span className="text-highlight">
                                  {item.height}mm
                                </span>
                              </li>
                            </ul>
                          </div>
                          <h6 className="product-title fw-500 mt-10">
                            <Link
                              to={"/shop-details/" + item.id}
                              className="text-color-secondary"
                            >
                              {item.title}
                            </Link>
                          </h6>
                          <div className="product-money mt-10">
                            {/* <span className="text-light-green fw-600 fs-16">
                              $
                              {new Intl.NumberFormat().format(
                                (
                                  (item.price * (100 - item.discount)) /
                                  100
                                ).toFixed(2)
                              )}
                            </span> */}

                            {/* {item.discount > 0 || item.discount !== "" ? (
                              <span className="text-price">
                                $
                                {new Intl.NumberFormat().format(
                                  item.price.toFixed(2)
                                )}
                              </span>
                            ) : (
                              ""
                            )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {secondProducts.map((item, id) => {
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                      <div className="product-box mb-md-20">
                        <div className="product-img">
                          <Link to={"/shop-details/" + item.id}>
                            <img
                              src={
                                "http://146.190.165.81:8000/media/" + item.url
                              }
                              className="img-fluid full-width"
                              alt={item.title}
                            />
                          </Link>
                          <div className="button-group">
                            <OverlayTrigger
                              placement="left"
                              overlay={wishlisttip}
                            >
                              <Link to="#">
                                {" "}
                                <i className="pe-7s-like" />{" "}
                              </Link>
                            </OverlayTrigger>
                          </div>
                          {/* <div className="cart-hover">
                  {item.stock === true ? (
                    <button type="button" className="btn-cart fw-600">
                      Add To Cart
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn-cart fw-600"
                      onClick={handleOutofStock}
                    >
                      Add To Cart
                    </button>
                  )}
                </div> */}
                        </div>
                        <div className="product-caption text-center">
                          <div className="product-status">
                            <ul className="product-raised">
                              <li>
                                <strong>Material</strong> {item.material}
                              </li>
                              <li>
                                <strong>Width</strong>
                                <span className="text-highlight">
                                  {item.width}mm
                                </span>
                              </li>
                            </ul>
                            <ul className="product-raised">
                              <li>
                                <strong>Price</strong>
                                {item.sales_value}$
                              </li>
                              <li>
                                <strong>Height</strong>
                                <span className="text-highlight">
                                  {item.height}mm
                                </span>
                              </li>
                            </ul>
                          </div>
                          <h6 className="product-title fw-500 mt-10">
                            <Link
                              to={"/shop-details/" + item.id}
                              className="text-color-secondary"
                            >
                              {item.title}
                            </Link>
                          </h6>
                          <div className="product-money mt-10">
                            {/* <span className="text-light-green fw-600 fs-16">
                              $
                              {new Intl.NumberFormat().format(
                                (
                                  (item.price * (100 - item.discount)) /
                                  100
                                ).toFixed(2)
                              )}
                            </span> */}

                            {/* {item.discount > 0 || item.discount !== "" ? (
                              <span className="text-price">
                                $
                                {new Intl.NumberFormat().format(
                                  item.price.toFixed(2)
                                )}
                              </span>
                            ) : (
                              ""
                            )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* Modal (Quick View) */}
              {/* <Modal
                show={this.state.modalshow}
                className="quick-view-modal"
                onHide={this.modalClose}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
              >
                <Modal.Body>
                  <button
                    type="button"
                    className="close"
                    onClick={this.modalClose}
                  >
                    ×
                  </button>
                  <Quickview productId={this.state.lastActiveBox} />
                </Modal.Body>
              </Modal> */}
            </div>
            {/* Pagination Start */}

            {/* <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.state.itemPerpage}
              totalItemsCount={this.state.data.length}
              pageRangeDisplayed={this.state.data.length}
              onChange={this.handlePageChange.bind(this)}
              innerClass="custom-pagination pagination mb-0"
              activeLinkClass="active"
              itemClass="page-item"
              linkClass="page-link"
            /> */}

            {/* Pagination End */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

const Content = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://146.190.165.81:8000/api/v1/picture/${id}`)
      .then((response) => response.json())
      .then((data) => setItem(data.data));
  }, [id]);

  return (
    <div className="container">
      <div
        className="row"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="col-lg-7">
          <div className="shop-detail-image">
            <div className="detail-slider">
              <img
                src={`http://146.190.165.81:8000/media/${item.url}`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="shop-detail-contents mb-md-40 mt-md-40">
            <div className="shop-detail-content-wrapper">
              <h6 className="text-custom-black" style={{fontFamily:"'Cinzel', serif"}}>{item.title}</h6>
            </div>

            <div className="price">
              <h5 className="text-light-green price-tag">
                <span className="text-custom-primary price-tag mr-2" style={{fontFamily:"'Montserrat', sans-serif"}}>
                  ${item.sales_value}
                </span>
              </h5>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600">
                Author:
                <Link to={`/profile/${item.user_id}`}>
                  <span className="text-success ml-2" style={{fontFamily:"'Montserrat', sans-serif"}}>{item.user}</span>
                </Link>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600">
                Width:
                <span className="text-success ml-2" style={{fontFamily:"'Montserrat', sans-serif"}}>{item.width}mm</span>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600" style={{fontFamily:"'Montserrat', sans-serif"}}>
                Height:
                <span className="text-success ml-2">{item.height}mm</span>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600" style={{fontFamily:"'Montserrat', sans-serif"}}>
                material:
                <span className="text-success ml-2">{item.material}</span>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600" style={{fontFamily:"'Montserrat', sans-serif"}}>
                Purpose:
                <span className="text-success ml-2">{item.purpose}</span>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600" style={{fontFamily:"'Montserrat', sans-serif"}}>
                Description:
                <span className="text-success ml-2">{item.description}</span>
              </p>
            </div>
            <div className="availibity mt-20">
              <p className="text-custom-black fw-600" style={{fontFamily:"'Montserrat', sans-serif"}}>
                Avability:
                <span className="text-success ml-2">In Stock</span>
              </p>
            </div>
            <div className="availibity mt-20">
              <p className="text-custom-black fw-600" style={{fontFamily:"'Montserrat', sans-serif"}}>
                Added Date:
                <span className="text-success ml-2">{item.date}</span>
              </p>
            </div>

            {/* <div className="shop-bottom">
              <div className="shop-meta mt-20">
                <p className="text-custom-black mb-0 fw-600">Categories:</p>
                <ul className="list-inline ml-2">
                  {getCategories(item.category)
                    .slice(0, 3)
                    .map((cat, i) => (
                      <li className="list-inline-item" key={i}>
                        <Link to={"/shop/cat/" + cat.id}>{cat.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="shop-meta mt-20">
                <p className="text-custom-black mb-0 fw-600">Tags:</p>
                <ul className="list-inline ml-2">
                  {getTags(item.tags)
                    .slice(0, 3)
                    .map((tag, i) => (
                      <li className="list-inline-item" key={i}>
                        <Link to={"/shop/tag/" + tag.id}>{tag.title}</Link>
                      </li>
                    ))}
                </ul>
              </div>
              <div className="product-btn mt-20">
                {item.stock === true ? (
                  <button type="button" className="btn-solid with-line ml-2">
                    Add To Cart
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn-solid with-line ml-2"
                    onClick={handleOutofStock}
                  >
                    Add To Cart{" "}
                  </button>
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

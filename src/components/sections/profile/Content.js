import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Content = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch(`http://146.190.165.81:8000/api/v1/users/${id}`)
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
                src={`http://146.190.165.81:8000/media/${item.avatar}`}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="shop-detail-contents mb-md-40 mt-md-40">
            <div className="shop-detail-content-wrapper">
              <h6 className="text-custom-black">{item.title}</h6>
            </div>

            <div className="price">
              <h5 className="text-light-green price-tag">
                <span className="text-custom-primary price-tag mr-2">
                  {`${item.name} ${item.surname}`}
                </span>
              </h5>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600">
                Education:
                <span className="text-success ml-2">{item.education}</span>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600">
                Art type:
                <span className="text-success ml-2">{item.art_type}</span>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600">
                Style:
                <span className="text-success ml-2">{item.style}</span>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600">
                Information:
                <span className="text-success ml-2">{item.info}</span>
              </p>
            </div>
            <div className="product-full-des mb-20">
              <p className="text-custom-black fw-600">
                Website:
                <span className="text-success ml-2">{item.website}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

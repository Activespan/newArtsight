import React, { Component } from "react";
import { recentProduct } from "../../helper/shophelper";
import { Link, withRouter } from "react-router-dom";
import { useState, useEffect } from "react";

const Shopsidebar = () => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    fetch("http://146.190.165.81:8000/api/v1/pictures")
      .then((response) => response.json())
      .then((data) => {
        data.data.second.forEach((item) => {
          if (recentProducts.length < 10) {
            recentProducts.push(item);
          } else {
            return;
          }
        });
      });
  }, []);

  return (
    <div className="side-bar">
      <div className="main-box padding-20 side-shop mb-xl-20">
        <h5 className="text-light-black" style={{fontFamily:"'Cinzel', serif"}}>recent products</h5>
        {recentProducts.map((item, i) => (
          <article className="side-post pb-xl-20 mb-xl-20 u-line" key={i}>
            <div className="thumb-img">
              <Link to={"/shop-details/" + item.id}>
                <img
                  src={"http://146.190.165.81:8000/media/" + item.url}
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
                    ${item.sales_value}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Shopsidebar;

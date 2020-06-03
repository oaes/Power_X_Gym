import React from "react";
import "./Price.scss";
import { Link } from "react-router-dom";
const Price = () => {
  return (
    <div className="container">

<h3 className="yellow-text"><span className="yellow">Choose the offer</span> That suits you</h3>
<p className="y-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque vero deserunt at harum pariatur? Ullam aliquam sint fugiat porro dicta?</p>

      <div className="columns ONE">
        <ul className="price">
          <p className="bill">BILLED MONTHLY</p>
          <p className="bill2">ADVANCED PLAN</p>
          <p className="bill3">$140</p>
          <li>✔ Mobile-Optimized</li>
          <li>✔ Best Hosting</li>
          <li>✔ Free Custom</li>
          <li>✔ Outstanding </li>
          <li>✔ Happy Customers </li>
          <li className="">
            <Link className="btn button" to={"/personal/"}>
              {" "}
              Purchase{" "}
            </Link>
          </li>
        </ul>
      </div>

      <div className="columns TWO">
        <ul className="price">
          <p className="bill">BILLED MONTHLY</p>
          <p className="bill2">BASIC PLAN</p>
          <p className="bill3">$120</p>
          <li>✔ Mobile-Optimized</li>
          <li>✔ Best Hosting</li>
          <li>✔ Free Custom</li>
          <li>✔ Outstanding </li>
          <li>✔ Happy Customers </li>
          <li className="">
            <Link className="btn button" to={"/personal/"}>
              {" "}
              Purchase{" "}
            </Link>
          </li>
        </ul>
      </div>

      <div className="columns THREE">
        <ul className="price">
          <p className="bill">BILLED MONTHLY</p>
          <p className="bill2">BEGINNER PLAN</p>
          <p className="bill3">$90</p>
          <li>✔ Mobile-Optimized</li>
          <li>✔ Best Hosting</li>
          <li>✔ Free Custom</li>
          <li>✔ Outstanding </li>
          <li>✔ Happy Customers </li>
          <li className="">
            <Link className="btn button" to={"/personal/"}>
              {" "}
              Purchase{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Price;

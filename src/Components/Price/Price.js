import React from "react";
import "./Price.scss";
const Price = () => {
  return (
    <div className="container">
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
            <a href="/" className="button">
              PURCHASE
            </a>
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
            <a href="/" className="button">
              PURCHASE
            </a>
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
            <a href="/" className="button">
              PURCHASE
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Price;

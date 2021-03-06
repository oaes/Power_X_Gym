import React from "react";
import "./Header.scss";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <section className="banner">
        <div className="container">
          <div
            className="row align-items-center text-white"
            style={{ height: "100vh" }}
          >
            <div className="col-md-6">
              <h2>The best fitness Studio in Town</h2>
              <p className="pText">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores aspernatur delectus, nam adipisci neque eum numquam.
                Itaque, alias facilis expedita dignissimos, atque distinctio
                voluptatem, asperiores ullam quia quidem placeat ratione.
              </p>
              <Link className="btn join-btn" to={'/pricing/'}> JOIN US </Link>
            </div>
            <div className="col-md-6 video h-100 overlay"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

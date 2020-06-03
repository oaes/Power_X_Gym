import React from 'react';
import facebook from "../../Images/bxl-facebook.png";
import instagram from "../../Images/bxl-instagram.png";
import twitter from "../../Images/bxl-twitter.png";
import whatsapp from "../../Images/bxl-whatsapp.png";
import youtube from "../../Images/bxl-youtube.png";
import { Link } from "react-router-dom";
import './Bottom.scss';
const Bottom = () => {
    return (
        <div className="bottom-block">
      <div className="row">
        <div className="col-3">
          <h4>
            POWER <strong className="text-yellow">X</strong>
          </h4>
        </div>
        <div className="col-2">
          <Link className="font-weight-bold" href="/">
            Need Help?
          </Link>
          <br />
          <Link href="/">Help Center</Link>
          <br />
          <Link href="/signup">Email Support</Link>
          <br />
          <Link href="/">Live Chat</Link>
          <br />
          <Link href="/">Gift Certificates</Link>
          <br />
          <Link href="/">Send Us Feedback</Link>
          <br />
        </div>
        <div className="col-2">
          <Link className="font-weight-bold" href="/">
            Digital Resources
          </Link>
          <br />
          <Link href="/">Articles</Link>
          <br />
          <Link href="/">E-books</Link>
          <br />
        </div>
        <div className="col-2">
          <Link className="font-weight-bold" href="/">
            Contact With Us
          </Link>
          <br />
          <Link href="/">
            <img src={youtube} alt="" className="social-media" />
          </Link>
          <Link href="/">
            <img src={facebook} alt="" className="social-media" />
          </Link>
          <Link href="/">
            <img src={instagram} alt="" className="social-media" />
          </Link>
          <Link href="/">
            <img src={twitter} alt="" className="social-media" />
          </Link>
          <Link href="/">
            <img src={whatsapp} alt="" className="social-media" />
          </Link>
          <br />
          <Link href="/">Forum</Link>
          <br />
        </div>
        <div className="col-2">
          <Link className="font-weight-bold" href="/">
            Join Our Newsletter
          </Link>
          <br />
          <p>
            Get exclusive news, features and updates from The Shredder Weight
            Loss Academy.
          </p>
        </div>
      </div>
      <p className="text-center text-secondary">
        <small>Copyright © Programming Hero 2020</small>
      </p>
    </div>
    );
};

export default Bottom;
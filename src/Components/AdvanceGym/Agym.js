import React from "react";
import "./Agym.scss";
import Hum from "../../Images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg";
import Hero from "../Header/Hero";
import checkMark from "../../Images/checkmark-square-2.png";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
const Agym = () => {
    return (
        <div className="agym">
            <Hero title="Advanced Gym" />
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src={Hum} alt="" />
                    </div>
                    <div className="col-md-7">
                        <h2 className="font-weight-bold">
                            <span className="text">CLASS</span> SCHEDULE
            </h2>
                        <div className="row m-4">
                            <div className="col-3">
                                <label className="schedule-label">
                                    <h6>Monday</h6>
                                    <p>
                                        <small>
                                            <span className="text">8:00AM-9:00AM</span>
                                        </small>
                                    </p>
                                </label>
                            </div>
                            <div lassName="col-3">
                                <label className="schedule-label">
                                    <h6>Tuesday</h6>
                                    <p>
                                        <small>
                                            <span className="text">10:00AM-11:00AM</span>
                                        </small>
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className="col-3">
                                <label className="schedule-label">
                                    <h6>WednesDay</h6>
                                    <p>
                                        <small>
                                            <span className="text">7:00AM-8:00AM</span>
                                        </small>
                                    </p>
                                </label>
                            </div>
                            <div lassName="col-3">
                                <label className="schedule-label">
                                    <h6>Thursday</h6>
                                    <p>
                                        <small>
                                            <span className="text">5:00PM-6:00PM</span>
                                        </small>
                                    </p>
                                </label>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className="col-3">
                                <label className="schedule-label">
                                    <h6>Friday</h6>
                                    <p>
                                        <small>
                                            <span className="text">6:00AM-7:00AM</span>
                                        </small>
                                    </p>
                                </label>
                            </div>
                            <div lassName="col-3">
                                <label className="schedule-label">
                                    <h6>Saturday</h6>
                                    <p>
                                        <small>
                                            <span className="text">7:00PM-8:00PM</span>
                                        </small>
                                    </p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p className="pr-3 pt-2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur,
                            unde architecto assumenda, accusamus explicabo dolorum laborum
                            amet harum quis aut nobis deleniti odio iure, eius cum perferendis
                            maxime doloribus. Fugiat.
            </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h6>
                            <img className="resize" src={checkMark} alt="" /> Having Slimmer
              Shaply Thighs
            </h6>
                        <br />
                        <h6>
                            <img className="resize" src={checkMark} alt="" /> Getting Stronger
              Body
            </h6>
                        <br />
                        <h6>
                            <img className="resize" src={checkMark} alt="" /> Increased
              Metabolism
            </h6>
                        <br />
                        <h6>
                            <img className="resize" src={checkMark} alt="" /> Increased
              Muscular Endurance
            </h6>
                        <br />
                        <h6>
                            <img className="resize" src={checkMark} alt="" /> Maximum Results
              in Less Time
            </h6>
                        <br />
                        <h6>
                            <img className="resize" src={checkMark} alt="" /> Firm Hips and
              Tummy
            </h6>
                        <br />
                    </div>
                    <div className="check col-md-6">
                        <Link className="check-btn font-weight-bold" to={"/pricing/"}>
                            {" "}
              JOIN US{" "}
                        </Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Agym;

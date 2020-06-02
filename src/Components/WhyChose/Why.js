import React from "react";
import "./Why.scss";
import p1 from "../../Images/Group 87.png";
import p2 from "../../Images/Group 88.png";
import p3 from "../../Images/gift-2.png";
const Why = () => {
  return (
    <div className="container">
      <p className="why">
        <span style={{ color: "#fcd742" }}>WHY</span> CHOOSE US
      </p>
      <div className="row">
        <div className="col-md-4">
          <div
            className="card float-md-left p1 d-flex"
            style={{ width: "18rem" }}
          >
            <img src={p1} className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>FREE FITNESS TRAINING</strong>
              </p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis rem praesentium necessitatibus esse aliquam nemo est
                ut.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card float-left p2 d-flex" style={{ width: "18rem" }}>
            <img src={p2} className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>TONS OF CARDIO AND STRENGTH</strong>
              </p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis rem praesentium necessitatibus esse aliquam nemo est
                ut.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="card p3  float-left d-flex"
            style={{ width: "18rem" }}
          >
            <img src={p3} className="card-img-top mx-auto" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <strong>NO COMMITMENT MEMBERSHIPS</strong>
              </p>
              <p className="card-text-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                veritatis rem praesentium necessitatibus esse aliquam nemo est
                ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;

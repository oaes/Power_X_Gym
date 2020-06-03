import React from "react";
import "./Why.scss";
import p1 from "../../Images/Group 87.png";
import p2 from "../../Images/Group 88.png";
import p3 from "../../Images/gift-2.png";
const Why = () => {
  return (
    <div className="whyIam">
    <div className="container">
      <p className="why">
        <span style={{ color: "#fcd742" }}>WHY</span> CHOOSE US
      </p>
      <div className="row text-center">
                    
                    <div className="card div_one py-2">
                        <img  src={p1} alt=""/>
                        <h3 className="text-dark font-weight-bold">FREE FITNESS TRAINING</h3>
                        <p className="text-dark mt-2 left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
                    <div className="card div_two">
                        <img  src={p2} alt=""/>
                        <h3 className="text-dark font-weight-bold">TONS OF CARDIO & STRENGTH</h3>
                        <p className="text-dark mt-2 left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
                    <div className="card div_three">
                        <img  src={p3} alt=""/>
                        <h3 className="text-dark font-weight-bold">NO COMMITMENT MEMBERSHIPS</h3>
                        <p className="text-dark mt-2 left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, suscipit numquam amet consectetur .</p>
                    </div>
              </div>
      </div>
    </div>
  );
};

export default Why;

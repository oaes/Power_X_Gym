import React from 'react';
import './Train.scss';
import img1 from '../../Images/bruce-mars-gJtDg6WfMlQ-unsplash.png';
import img2 from '../../Images/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';

const Train = () => {
    return (
        <div className="container">
            <p className="tp">TRAINING <span className="text-yellow">PROGRAMS</span></p>
            <div className="row">
                <div className="col-md-6">
                    <img src={img1} alt=""/>
                    <button className="btn-war">YOGA TRAINING SESSION →</button>
                </div>

                <div className="col-md-6">
                    <img src={img2} alt=""  />
                    <button className="btn-war">CARDIO TRAINING SESSION →</button>
                </div>
            </div>
            
        </div>
    );
};

export default Train;
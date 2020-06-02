import React from 'react';
import './MidSection.scss';
import p from '../../Images/Group 80.png';
import w from '../../Images/Group 81.png';
import n from '../../Images/Group 82.png';

const Pwn = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="card progression">
                        <div className="card-text">
                        <img  src={p} alt=""/>
                            <p className="ttext">PROGRESSION</p>
                            <p className="mm1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fugiat nihil unde debitis doloremque maxime!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card workout">
                        <div className="card-text">
                        <img  src={w} alt=""/>
                            <p className="ttext">WORKOUT</p>
                            <p className="mm1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fugiat nihil unde debitis doloremque maxime!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card nutrition">
                        <div className="card-text">
                        <img  src={n} alt=""/>
                            <p className="ttext">NUTRITION</p>
                            <p className="mm1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, fugiat nihil unde debitis doloremque maxime!</p>
                        </div>
                    </div>
                </div>
            </div>
  

        </div>
    );
};

export default Pwn;
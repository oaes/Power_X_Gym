import React from 'react';
import './Hero.scss';


const Hero = ({title}) => {
    return (
        <div className="hero-banner">
             <div className="container d-flex align-items-center justify-content-center">
                <h1 className="display-4 font-weight-bold  text-uppercase ss">{title}</h1>
            </div>
        </div>
    );
};

export default Hero;
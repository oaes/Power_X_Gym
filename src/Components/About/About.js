import React from 'react';
import image from '../../Images/wells-chan-H-vAxuWxmi8-unsplash.jpg';
import './About.scss';

const About = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={image} alt=""/>
                </div>

                <div className='col-md-6 left'>
                    <h1>About Us</h1>
                    <h3>We are here to dream!</h3>
                    <h3 className="text-black-50">Our team is here serve you</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, earum repellendus explicabo numquam perferendis dolores, minima placeat quas dolorem eligendi voluptatibus nemo perspiciatis quos dolore dolorum quisquam officiis esse excepturi rerum! Minima qui fugit quae sint voluptas veniam eveniet recusandae.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
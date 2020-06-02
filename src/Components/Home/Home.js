import React from 'react';
import Header from '../Header/Header';
import MidSection from '../MidSection/MidSection';
import About from '../About/About';
import Train from '../TrainingPart/Train';
import Why from '../WhyChose/Why';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
           <Header/> 
           <MidSection/>
           <About/>
           <Train/>
           <Why/>
           <Footer/>
        </div>
    );
};

export default Home;
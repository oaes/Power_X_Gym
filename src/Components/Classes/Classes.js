import React from 'react';
import Hero from '../Header/Hero';
import vic from '../../Images/victor-freitas-546919-unsplash.png';
import bay from '../../Images/baylee-gramling-5m4Z14SDL80-unsplash.jpg';
import hum from '../../Images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg';
import al from '../../Images/alora-griffiths-TuzrzArccvc-unsplash.jpg';
import j from '../../Images/john-fornander-FIu48iuo_4g-unsplash.jpg';
import s from '../../Images/sven-mieke-Lx_GDv7VA9M-unsplash.jpg';
import {Link} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './Classes.scss';
import gym from '../AdvanceGym/Agym';
const Classes = () => {
    return (
      <div className="classes">
      <Hero title="Our classes"/>
          <div className="container">
              <div className="row_1">
                  <div className="card-deck">
                      <div className="card">
                          <img className="card-img-top six" src={vic} alt=""/>
                          <div className="card-footer">
                          <label className="label-text font-weight-bold" ><Link className="" to="/gym">PHYSIO TRAINING  →</Link></label>
                          </div>
                      </div>
                      <div className="card">
                          <img className="card-img-top six" src={bay} alt=""/>
                          <div className="card-footer">
                          <label className="label-text font-weight-bold"><Link className="" to="/gym">SELF DEFENSE  →</Link></label>
                          </div>
                      </div>
                      <div className="card">
                          <img className="card-img-top six" src={hum} alt=""/>
                          <div className="card-footer">
                          <label className="label-text font-weight-bold"><Link className="" to="/gym">ADVANCE GYM  →</Link></label>
                          </div>
                      </div>
                      </div>
              </div>
              <div className="row_2">
              <div className="card-deck">
                      <div className="card">
                          <img className="card-img-top six" src={al} alt=""/>
                          <div className="card-footer">
                          <label className="label-text font-weight-bold"><Link className="" to="/gym">CARDIO TRAINING  →</Link></label>
                          </div>
                      </div>
                      <div className="card">
                          <img className="card-img-top six" src={j} alt=""/>
                          <div className="card-footer">
                          <label className="label-text font-weight-bold"><Link className="" to="/gym">STRENGTH TRAINING  →</Link></label>
                          </div>
                      </div>
                      <div className="card">
                          <img className="card-img-top six" src={s} alt=""/>
                          <div className="card-footer">
                          <label className="label-text font-weight-bold"><Link className="" to="/gym">PSYCHO TRAINING  →</Link></label>
                          </div>
                      </div>
                      </div>
              </div>
              
          </div>
        <Footer/>
      </div>
    );
};

export default Classes;
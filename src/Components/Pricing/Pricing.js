import React from 'react';
import Hero from '../Header/Hero';
import Price from '../Price/Price';
import Bottom from '../Pricing/Bottom';

const Pricing = () => {
    return (
        <div>
            <Hero title="PRICING PLANS"/>
            <Price/>
            <Bottom/>
        </div>
    );
};

export default Pricing;
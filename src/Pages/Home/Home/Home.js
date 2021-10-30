import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Tours from '../Tours/Tours';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Tours></Tours>
            <About></About>
        </div>
    );
};

export default Home;
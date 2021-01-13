import React from 'react';

import Header from '../../components/header/header';
import Chefs from '../../components/chefs/chefs';
import Features from '../../components/features/features';
import Foods from '../../components/foods/foods';
import Meals from '../../components/meals/meals';
import Footer from '../../components/footer/footer';
import './home.scss';


const Home = () => {
    return (
        <div className="container">
            <Header />
            <Chefs />
            <Features />
            <Foods />
            <Meals />
            <Footer />
        </div>
    );
};


export default Home;
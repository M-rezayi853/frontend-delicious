import React from 'react';

import HeaderAboutme from '../../components/headerAboutme/headerAboutme';
import Footer from '../../components/footer/footer';
import MySelf from '../../components/mySelf/mySelf';
import MySelfText from '../../components/mySelfText/mySelfText';
import MySelfInsta from '../../components/mySelfInsta/mySelfInsta';
import './aboutme.scss';


const Aboutme = () => {
    return (
        <div className="aboutme-container">
            <HeaderAboutme />

            <MySelf />
            <MySelfText />
            <MySelfInsta />

            <Footer />
        </div>
    );
};


export default Aboutme;
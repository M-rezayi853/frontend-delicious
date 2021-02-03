import React from 'react';

import Navigation from '../../components/navigation/navigation';
import Footer from '../../components/footer/footer';
import './error404.scss';


const Error404 = () => {
    return (
        <div className="error-con">
            <Navigation 
                nameClass={'navigation__error'}
            />
            
            <div className="error__imagOverlay">
                <div className="error__imageContainer" />
                <h2 className="error__imageText">
                    Sorry this page is broken!
                </h2>
                <h2 className="error__text">turn on your <span>vpn</span> if you live in iran :(((</h2>
                <h2>XD</h2>
            </div>

            <Footer />
        </div>
    );
};


export default Error404;
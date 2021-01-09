import React, { useState } from 'react';

import { ReactComponent as LogoArrow } from '../../assets/icons/arrow-up2.svg';
import './scrollArrow.scss';


const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <div className="arrow">
            <div className="arrow__con" 
                style={{ display: showScroll ? 'flex' : 'none'}}
                onClick={scrollTop}
            >
                <LogoArrow className="arrow__icon" />
            </div>
        </div>
    );
};


export default ScrollArrow;
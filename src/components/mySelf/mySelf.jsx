import React from 'react';

import imgSelf from '../../assets/imgMyself.jpg';
import imgMikasa from '../../assets/imgMikasa.jpg';
import imgMessi from '../../assets/imgMessi.jpg';
import imgCats from '../../assets/imgCats.jpg';
import './mySelf.scss';


const MySelf = () => {
    return (
        <div className="mySelf">
            <div className="mySelf__imgSelf">
                <img src={imgSelf} alt="my self" />
            </div>

            <div className="mySelf__details">
                <h1 className="heading-7">Hello,</h1>
                <h2 className="heading-8">&nbsp; &nbsp; I'm Mahdi , <span className="heading-9"> m_hazara_77</span></h2>
                <h3 className="heading-10">&nbsp; &nbsp; &nbsp; &nbsp; My Favorites:</h3>

                <div className="mySelf__images">
                    <div className="mySelf__image">
                        <img src={imgMikasa} alt="mikasa" />
                        <div className="mySelf__text">
                            <span>Mikasa Ackerman<br/></span>
                            <span>Attack on Titan</span>
                        </div>
                    </div>

                    <div className="mySelf__image">
                        <img src={imgMessi} alt="messi" />
                        <div className="mySelf__text">
                            <span>Messi & Ronaldinho<br/></span>
                            <span>fc Barcelona</span>
                        </div>
                    </div>

                    <div className="mySelf__image">
                        <img src={imgCats} alt="cats" />
                        <div className="mySelf__text">
                            <span>My brother's cats<br/></span>
                            <span>Lovely Cats</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MySelf;
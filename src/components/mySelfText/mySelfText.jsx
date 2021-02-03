import React from 'react';

import imgBridge1 from '../../assets/imgBridge1.jpg';
import imgBridge2 from '../../assets/imgBridge2.jpg';
import imgBridge3 from '../../assets/imgBridge3.jpg';
import imgPlant1 from '../../assets/imgPlant1.jpg';
import imgPlant2 from '../../assets/imgPlant2.jpg';
import BtnSocial from '../btnSocial/btnSocial';
import './mySelfText.scss';


const MySelfText = () => {
    return (
        <div className="mySelfText">
            <div className="mySelfText__text">
                <span className="paragraph-2">
                    My name is mahdi rezayi.<br/> I'm a civil engineering student. I love technology and programming. My favorite sport is futsal. I like irrigation and growing plants. my favorite structure is oresund bridge that's located between sweden and denmark.
                </span>

                <div className="mySelfText__textImg">
                    <img src={imgPlant1} alt="plant" />

                    <div className="mySelfText__des">
                        <span>portulacaria afra<br/></span>
                        <span>a special plant for me</span>
                    </div>
                </div>

                <div className="mySelfText__textImg">
                    <img src={imgPlant2} alt="plant" />

                    <div className="mySelfText__des">
                        <span>portulacaria afra<br/></span>
                        <span>a special plant for me</span>
                    </div>
                </div>
            </div>

            <div className="mySelfText__images">
                <div className="mySelfText__img mySelfText__img-2">
                    <img src={imgBridge2} alt="bridge" />
                </div>

                <div className="mySelfText__img mySelfText__img-1">
                    <img src={imgBridge1} alt="bridge" />

                    <div className="mySelfText__des">
                        <span>oresund bridge<br/></span>
                        <span>between sweden and denmark</span>
                    </div>
                </div>

                <div className="mySelfText__img mySelfText__img-2">
                    <img src={imgBridge3} alt="bridge" />
                </div>
            </div>

            <div className="mySelfText__btn">
                <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/m_hazara_77/'>
                    <BtnSocial instagram>instagram</BtnSocial>
                </a>
                <a target='_blank' rel='noopener noreferrer' href='https://t.me/m_hazara_77'>
                    <BtnSocial telegram>telegram</BtnSocial>
                </a>
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/M-rezayi853'>
                    <BtnSocial github>github</BtnSocial>
                </a>
            </div>
        </div>
    );
};


export default MySelfText;
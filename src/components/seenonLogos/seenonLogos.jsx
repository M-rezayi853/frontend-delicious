import React from 'react';

import logobbc from '../../assets/logo-bbc.png';
import logoforbes from '../../assets/logo-forbes.png';
import logotechcrunch from '../../assets/logo-techcrunch.png';
import logobi from '../../assets/logo-bi.png';
import './seenonLogos.scss';


const SeenonLogos = () => {
    return (
        <div className="seenon-logos">
            <img src={logobbc} alt="log 1"/>
            <img src={logoforbes} alt="log 2"/>
            <img src={logotechcrunch} alt="log 3"/>
            <img src={logobi} alt="log 4"/>
        </div>
    );
}


export default SeenonLogos;
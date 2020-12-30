import React from 'react';

import './footer.scss';


const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__nav">
                <li className="footer__item">
                    <a className="footer__link" href="/findfood">Find your food</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="/contactus">Contact us</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="/privacy">Privacy</a> 
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="/workus">Work with us</a>
                </li>
                <li className="footer__item">
                    <a className="footer__link" href="/request">Request proposal</a>
                </li>
            </ul>

            <p className="footer__text">
                Built my <a className="footer__link-text" href="https://www.instagram.com/m_hazara_77"> M_HAZARA_77 </a> for his online course <a className="footer__link-text" href="/cssandsass"> ADVENCED CSS AND SASS. </a>Copyright © by Mahdi Rezayi.<br />You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your design. A credit to the original author, Mahdi rezayi, is of course highly appreciated!
            </p>
        </footer>
    );
}


export default Footer;
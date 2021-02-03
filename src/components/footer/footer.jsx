import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';


const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__nav">
                <li className="footer__item">
                    <Link className="footer__link" to="/kitchen">Find your food</Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to="/aboutme">Contact us</Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to="/">Privacy</Link> 
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to="/aboutme">Work with us</Link>
                </li>
                <li className="footer__item">
                    <Link className="footer__link" to="/aboutme">Request proposal</Link>
                </li>
            </ul>

            <p className="footer__text">
                Built my <a className="footer__link-text" target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/m_hazara_77"> M_HAZARA_77 </a> for his online course <a className="footer__link-text" target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/m_hazara_77"> ADVENCED CSS AND SASS. </a>Copyright © by Mahdi Rezayi.<br />You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your design. A credit to the original author, Mahdi rezayi, is of course highly appreciated!
            </p>
        </footer>
    );
}


export default Footer;
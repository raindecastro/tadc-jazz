import React from 'react';
import { Link } from 'react-router-dom';
import facebookLogo from '../../dist/img/facebook.png';
import instagramLogo from '../../dist/img/instagram.png';
import twitterLogo from '../../dist/img/twitter.png';

const tadcURL = "https://www.facebook.com/theassumptiondancecompany/";
const instaURL = "https://www.instagram.com/tadcph/";
const twitterURL = "https://twitter.com/tadcph?lang=en";

const Footer = () => (
    <footer>   
        <div className="footer__links">
            <div className="links__container">
                <a href={tadcURL}><img className="links__logo" height="30px" width="30px" src={`/${facebookLogo}`} /></a>
                
            </div>
            <div className="links__container">
                <a  href={instaURL} ><img className="links__logo" height="30px" width="30px" src={`/${instagramLogo}`} /></a>
                
                </div>
            <div className="links__container">
                <a href={twitterURL}><img className="links__logo" height="30px" width="30px" src={`/${twitterLogo}`} /></a>
                
            </div>  
        </div>
    </footer>
);

export default Footer;
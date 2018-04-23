import React from 'react';
import { Link } from 'react-router-dom';
import facebookLogo from '../../dist/img/facebook.jpg';
import instagramLogo from '../../dist/img/instagram.jpg';
import twitterLogo from '../../dist/img/twitter.jpg';

const tadcURL = "https://www.facebook.com/theassumptiondancecompany/"

const Footer = () => (
    <footer>   
        <div className="footer__links">
            <a href={tadcURL}><img src={facebookLogo} /></a>
            <img src={instagramLogo} />
            <img src={twitterLogo} />
        </div>
    </footer>
);

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import facebookLogo from '../../dist/img/facebook.jpg';
import instagramLogo from '../../dist/img/instagram.jpg';
import twitterLogo from '../../dist/img/twitter.jpg';

const tadcURL = "https://www.facebook.com/theassumptiondancecompany/";
const instaURL = "https://www.instagram.com/tadcph/";
const twitterURL = "https://twitter.com/tadcph?lang=en";

const Footer = () => (
    <footer>   
        <div className="footer__links">
            <a href={tadcURL}><img src={facebookLogo} /></a>
            <img src={instagramLogo} href={instaURL} />
            <img src={twitterLogo} href={twitterURL} />
        </div>
    </footer>
);

export default Footer;
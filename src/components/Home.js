import React from 'react';
import image1 from '../../dist/img/image1.jpg';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Home = () => (
    <div className="main__container">
        <div className="welcome">
            <h1 className="welcome__header">Welcome</h1>
            <p className="welcome__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, purus vitae eleifend venenatis, ipsum arcu mollis orci, vel bibendum eros nulla nec urna. Phasellus ac tincidunt arcu. Aliquam ut facilisis nunc, at laoreet magna. Morbi a vulputate elit. Nullam sed velit eros. Vestibulum tellus urna, porta vel hendrerit placerat, porttitor ultricies ante. Mauris nec dolor in lacus consequat viverra. Vivamus rhoncus dolor diam, eu rutrum quam rhoncus quis. Sed molestie risus nec semper luctus. Pellentesque eu consequat lectus, auctor consectetur metus. Duis cursus est elit, ac posuere risus efficitur sed. Aliquam gravida varius dui ac luctus. Etiam ut elementum mauris, eu suscipit libero. Sed vitae placerat odio, at auctor diam.</p>
        </div>
        <div name="team" className="image1__container">
            <img className="image1" src={image1} />
        </div>
    </div>
);

export default Home;
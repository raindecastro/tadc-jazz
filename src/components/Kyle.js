import React from 'react';
import kyle from '../../dist/img/Kyle.jpg';
import Youtube from '../components/Youtube';

export default class extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="talent__container">
                <h1 className="talents__header">Kyle Nate</h1>
                <img src={`/${kyle}`} height="300px" width="300px" />
                <div className="talent__description">
                    <p>Age: 20</p>
                    <p>Course: Media Production</p>
                    <p>Position: President</p>
                </div>
            <p className="welcome__message">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum, purus vitae eleifend venenatis, ipsum arcu mollis orci, vel bibendum eros nulla nec urna. Phasellus ac tincidunt arcu. Aliquam ut facilisis nunc, at laoreet magna. Morbi a vulputate elit. Nullam sed velit eros. Vestibulum tellus urna, porta vel hendrerit placerat, porttitor ultricies ante. Mauris nec dolor in lacus consequat viverra. Vivamus rhoncus dolor diam, eu rutrum quam rhoncus quis. Sed molestie risus nec semper luctus. Pellentesque eu consequat lectus, auctor consectetur metus. Duis cursus est elit, ac posuere risus efficitur sed. Aliquam gravida varius dui ac luctus. Etiam ut elementum mauris, eu suscipit libero. Sed vitae placerat odio, at auctor diam.</p>
            <Youtube />
        </div>
        );
    }
};
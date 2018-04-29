import React from 'react';
import { Link } from 'react-router-dom';
import kyle from '../../dist/img/Kyle.jpg';
import Burger from '../components/Burger';

export default class extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render () {
        return (
            <div>
                <Burger />
                <div className="talents__container">
                    <h1>Talents</h1>
                    <Link to="/team/kyle"><img className="talents__images" src={`/${kyle}`} height="300px" width="300px" /></Link>
                    <img className="talents__images" src={`/${kyle}`} height="300px" width="300px" />
                    <img className="talents__images" src={`/${kyle}`} height="300px" width="300px" />
                </div>
            </div>
        );
    }
}

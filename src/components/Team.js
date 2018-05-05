import React from 'react';
import {Link} from 'react-router-dom';
import kyle from '../../dist/img/kyle2.jpg';
import mira from '../../dist/img/mira.jpg';
import allie from '../../dist/img/allie.jpg';
import majo from '../../dist/img/majo.jpg';
import sofia from '../../dist/img/sofia.jpg';

import kylehover from '../../dist/img/Kyle-hover.jpg';
import Burger from '../components/Burger';

export default class extends React.Component {
    state = {
        kyleImage: kyle
    };

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    hoverKyleImage = () => {
        this.setState({kyleImage: kylehover});
    };

    leaveKyleImage = () => {
        this.setState({kyleImage: kyle});
    };
    // onMouseEnter={this.hoverKyleImage} onMouseLeave={this.leaveKyleImage} image
    // should be 152.5 x 232
    render() {
        return (
            <div>
                <Burger/>
                <div className="talents__container">
                    <h1 className="talents__header">Talents</h1>
                    <div className="talent__row">
                        <Link to="/team/kyle"><img
                            id="image__kyle"
                            className="talents__images"
                            src={`/${this.state.kyleImage}`}
                            height="235px"
                            width="152px"/></Link>
                        <img className="talents__images" src={`/${mira}`} height="235px" width="152px"/>
                    </div>
                    <div className="talent__row">
                        <img
                            className="talents__images"
                            src={`/${allie}`}
                            height="235px"
                            width="152px"/>
                        <img className="talents__images" src={`/${majo}`} height="235px" width="152px"/>
                    </div>
                    <img
                        className="talents__images"
                        src={`/${sofia}`}
                        height="235px"
                        width="152px"/>
                </div>
            </div>
        );
    }
}

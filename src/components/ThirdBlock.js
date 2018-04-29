import React from 'react';
import sue1 from '../../dist/img/sue.jpg';
import chris1 from '../../dist/img/chris.jpg';

export default class extends React.Component {
    
    render () {
        return (
            <div className="third-block">
            <h1 className="welcome__header">coaches</h1>
                <div className="coaches__container">
                    <img onClick={() => {
                        this.props.openModal('sue');
                        this.props.hideMenuIcon();
                    }} className="coaches__image" src={sue1} />
                    <p className="coaches__name">susan justimbaste-decena</p>
                    <img onClick={() => {
                        this.props.hideMenuIcon();
                        this.props.openModal('chris')
                    }} className="coaches__image" src={chris1} />
                    <p className="coaches__name">chris nocon</p>
                </div>
                
        </div>
        );
    }
};
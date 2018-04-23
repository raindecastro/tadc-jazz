import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../dist/img/logo.png';

const Header = () => (
    <header className="header">
        <img className="logo" src={logo} />
        <div className="header__links__container">
            <NavLink to="/" className="header__link" activeClassName="is-active" exact={true}>home</NavLink>
            <NavLink to="/about" className="header__link" activeClassName="is-active" exact={true}>about</NavLink>
            <NavLink to="/coaches" className="header__link" activeClassName="is-active" exact={true}>coaches</NavLink>
            <NavLink to="/team" className="header__link" activeClassName="is-active" exact={true}>team</NavLink>
            <NavLink to="/contact" className="header__link" activeClassName="is-active">contact</NavLink>
        </div>
    </header>
    
);

export default Header;
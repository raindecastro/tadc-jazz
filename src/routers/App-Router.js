import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Album from '../components/Album';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Coaches from '../components/Coaches';
import About from '../components/About';
import SideBar from '../components/Sidebar';
import Kyle from '../components/Kyle';
import kyle from '../../dist/img/Kyle.jpg';

const AppRouter = () => (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div className="site">
            <div className="content">
                <Switch>
                    <Route path="/" component={SideBar} exact={true} />
                    <Route path="/home" component={Home} exact={true} />
                    <Route path="/about/" component={About} exact={true} />
                    <Route path="/coaches/" component={Coaches} exact={true} />
                    <Route path="/coaches/:name" component={Album} exact={true} />
                    <Route path="/team/" component={Team} exact={true} />
                    <Route path="/team/kyle" component={Kyle} exact={true} />
                    <Route path="/contact" component={Contact} exact={true}/>
                    
                </Switch>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
);

// <Route component={NotFoundPage} exact={true}/>

export default AppRouter;

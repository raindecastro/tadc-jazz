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

const AppRouter = () => (
    <BrowserRouter>
        <div className="site">
            <Header/>
            <div className="content">
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    <Route path="/about/" component={About} exact={true} />
                    <Route path="/coaches/" component={Coaches} exact={true} />
                    <Route path="/coaches/:name" component={Album} exact={true} />
                    <Route path="/team/" component={Team} exact={true} />
                    <Route path="/team/:name" component={Album} exact={true}/>
                    <Route path="/contact" component={Contact} exact={true}/>
                    <Route component={NotFoundPage} exact={true}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
);

export default AppRouter;
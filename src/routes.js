import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './hoc/layout';

import Home from './components/Home';
import Exhibition from './components/Exhibition';
import Collections from './components/Collections';
import Tickets from './components/Tickets';
import Login from './components/Register_login/login';

const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/exhibitions_events" exact component={Exhibition}/>
                <Route path="/become_a_member" exact component={Login}/>
                <Route path="/collections" exact component={Collections}/>
                <Route path="/plan_your_visit" exact component={Tickets}/>
                <Route path="/artists_artworks" exact component={Home}/>
                <Route path="/shop" exact component={Home}/>
            </Switch>
        </Layout>
    )
}

export default Routes;

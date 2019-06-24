import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home.js'
import Test from './Test.js';
import PageNotFound from './PageNotFound.js'

class Content extends Component {

    render() {

        return( 
        
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/test' component={Test}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </main>
        
        );

    }

}

export default Content;
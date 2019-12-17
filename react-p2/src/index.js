import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {MainLayout, FilmLayout} from "./components/Layout";
import NotFound from "./components/NotFound";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainLayout}/>
                <Route exact path='/movie/:id' component={FilmLayout}/>
                <Route path='/:type/:value' component={MainLayout}/>
                <Route path='**' component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

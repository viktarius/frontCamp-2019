import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import MainFilm from "./components/MainFilm";
import MainLayout from "./components/Layout";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainLayout}/>
                <Route exact path='/movie/:id' component={MainFilm}/>
                <Route path='/:type/:value' component={MainLayout}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from "./components/Header";
import MainFilm from "./components/MainFilm";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={Header}/>
                    <Route path='/movie/:id' component={MainFilm}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

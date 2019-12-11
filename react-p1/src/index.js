import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';
import {Header} from "./components/Header/Header";
import MainFilm from "./components/MainFilm/MainFilm";

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
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

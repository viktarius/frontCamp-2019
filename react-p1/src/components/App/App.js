import React from 'react';
import './App.scss';
import Films from "../Films/Films";
import {Footer} from "../Footer/Footer";
import Sort from "../Sort/Sort";
import {Header} from "../Header/Header";

function App({children}) {
    return (
        <div className="App">
            {children}
            <Sort/>
            <Films/>
            <Footer/>
        </div>
    );
}

export default App;

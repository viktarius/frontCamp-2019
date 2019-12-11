import React from 'react';
import './App.scss';
import Films from "../Films/Films";
import {Footer} from "../Footer/Footer";
import {Sort} from "../Sort/Sort";
import {Header} from "../Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Sort/>
            <Films/>
            <Footer/>
        </div>
    );
}

export default App;

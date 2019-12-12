import React from 'react';
import './App.scss';
import Films from "../Films";
import Footer from "../Footer";
import Sort from "../Sort/Sort";
import ErrorHandler from "../ErrorHandler/ErrorHandler";

function App({children}) {
    return (
        <div className="App">
            {children}
            <Sort/>
            <Films/>
            <Footer/>
            <ErrorHandler />
        </div>
    );
}

export default App;

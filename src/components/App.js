import React, { Component } from 'react';
import mrSmallImg from '../../public/images/mrsmall.jpg';
import '../styles/app.css';

const App = () => {
    return (
        <div className="app">
            <h1>hello world!</h1>
            <img src={mrSmallImg}/>
        </div>
    
    )
}

export default App;
import React, { Component } from 'react';
import {Calculator} from './components/Calculator';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Calculator/>
            </div>
        )
    }
}

export default App;

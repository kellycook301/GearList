import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import Nutshell from './components/MyGearList';
import App from './App'

ReactDOM.render(
    <Router>
        <div>
        <App />
        <Nutshell />
        </div>
    </Router>
    ,document.getElementById('root'));

// registerServiceWorker();

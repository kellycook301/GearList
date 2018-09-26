import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import MyGearList from './components/MyGearList';
import App from './App'

ReactDOM.render(
    <Router>
        <div>
        <MyGearList />
        </div>
    </Router>
    ,document.getElementById('root'));

// registerServiceWorker();

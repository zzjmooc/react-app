import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import './index.css';
import App from './App';
import Home from  './pages/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/home" component={Home} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();

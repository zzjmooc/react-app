import React, {Component} from 'react';
import Login from './pages/login/Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {};

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <Login />
            </div>
        );
    }
}

export default App;

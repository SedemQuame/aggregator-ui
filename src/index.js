import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from "react-ga";
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import Nav from "./Component/Nav/index.component";
import './index.css';

const trackingCode = "UA-192100220-1";
ReactGA.initialize(trackingCode);
ReactGA.pageview(window.location.pathname + window.location.search);

const Index = () => {
    return (<React.StrictMode>
        <Router>
            <Nav/>
            <App/>
        </Router>
    </React.StrictMode>);
}
ReactDOM.render(<Index/>, document.getElementById('root'));

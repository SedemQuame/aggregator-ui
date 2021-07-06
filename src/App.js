import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Pages/Home/index.component';
import ArticleReader from './Pages/ArticleReader/index.component';
import Story from './Component/Category/story.component';
import Search from './Component/Search/index.component';
import Radio from './Component/Radio/index.component';
import advertise from './Component/Ads/index.component';

function App() {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" component={Home} key="home"/>
                <Route path="/article/:articleId" component={ArticleReader}  key={window.location.pathname}/>
                <Route exact path="/articles/:category" component={(props) => <Story {...props} key={window.location.pathname}/>}/>
                <Route exact path="/radio" component={Radio} key="radio"/>
                <Route exact path="/search" component={Search} key="search"/>
                <Route exact path="/advertise" component={advertise} key="advertise"/>
            </Switch>
        </div>
    );
}

export default App;

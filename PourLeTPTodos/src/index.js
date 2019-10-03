import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Title from "./Title";
import App from './App';
import * as serviceWorker from './serviceWorker';
/*Créations des routes pour les pages */
import {NotFound} from "./NotFound";

const Routing = ()=>(
    <Router>
        <Switch>
                /*/Title/:id se référer à la page Title.js , le :id est juste une clé qu'on nomme dans un autre fichier*/
                <Route path="/Title/:id" component={Title}/>
                /*exact path ="/" ca veut dire qu'a la page de base on affiche App*/
                <Route exact path="/" component={App}/>
                <Route component={NotFound} />
        </Switch>
    </Router>
);




ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

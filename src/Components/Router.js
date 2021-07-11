import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import App from '../App';
import Enter from './Enter';


const Router = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path={'/'} component={Enter}/>
            <Route path={'/App'} component={App}/>
        </Switch>
    </HashRouter>
)

export default Router;
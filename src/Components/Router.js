import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App';
import Enter from './Enter';


const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path={'/'} component={Enter}/>
            <Route path={'/App'} component={App}/>
        </Switch>
    </BrowserRouter>
)

export default Router;
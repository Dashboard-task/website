import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from '../components/home-page/home-page';

/*
* Routing page:
TODO Faire la distribution des routes
*/
export const MainRouter: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/'>
                <HomePage />
            </Route>
        </Switch>
    </BrowserRouter>
)

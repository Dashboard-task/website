import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FooterComponent } from '../components/footer/footer';
import { HomePage } from '../components/home-page/home-page-container';
import { NavbarComponent } from '../components/navbar/navbar';

/*
* Routing page.
*/
export const MainRouter: React.FC = () => (
    <></>
    // <BrowserRouter>
    //     <Switch>
    //         <Route path='/'>
    //             <NavbarComponent />
    //             <HomePage />
    //             <FooterComponent />
    //         </Route>
    //     </Switch>
    // </BrowserRouter>
)

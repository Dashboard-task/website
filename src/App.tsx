import React from 'react';
import ThemeContextProvider from './components/context-providers/theme-context-provider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { FooterComponent } from './components/footer/footer';
import { HomePage } from './components/home-page/home-page-container';
import { NavbarComponent } from './components/navbar/navbar';

export const App: React.FC = () => (
  <ThemeContextProvider>
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <NavbarComponent />
          <HomePage />
          <FooterComponent />
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeContextProvider>
)

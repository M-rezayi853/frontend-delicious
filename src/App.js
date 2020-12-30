import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home/home';
import Kitchen from './pages/kitchen/kitchen';
import SignIn from './pages/signIn/signIn';
import './App.scss';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/kitchen' component={Kitchen} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </>
  );
}

export default App;

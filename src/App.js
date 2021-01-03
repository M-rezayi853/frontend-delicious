import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from './components/sidebar/sidebar';
import Home from './pages/home/home';
import Kitchen from './pages/kitchen/kitchen';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';
import './App.scss';

import { auth, createUserProfileDoc } from './firebase/firebase.utils';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const unsubscribeFormAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth);

      return () => unsubscribeFormAuth;
    });
  }, [setCurrentUser]);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="app">
      <Sidebar 
        currentUser={currentUser} 
        toggleMenu={toggleMenu} 
        showMenu={showMenu} 
        hideMenu={hideMenu}
      />
      
      <div onClick={hideMenu}>
        <Switch >
          <Route exact path='/' component={() => <Home currentUser={currentUser} />} />
          <Route path='/kitchen' component={() => <Kitchen currentUser={currentUser} />} />
          <Route exact path='/signin' component={() => currentUser ? <Redirect to='/' /> : <SignIn currentUser={currentUser} />} />
          <Route exact path='/signup' component={() => currentUser ? <Redirect to='/' /> : <SignUp currentUser={currentUser} /> } />
        </Switch>
      </div>
    </div>
  );
}

export default App;

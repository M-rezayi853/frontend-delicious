import React, { useEffect, useRef } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Sidebar from './components/sidebar/sidebar';
import Home from './pages/home/home';
import Kitchen from './pages/kitchen/kitchen';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signUp/signUp';
import Checkout from './pages/checkout/checkout';
import ScrollArrow from './components/scrollArrow/scrollArrow';
import './App.scss';

import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions';
// import { selectKitchenCollectionsForPreview } from './redux/kitchen/kitchen.selectors';

// import { auth, createUserProfileDoc, addCollectionAndDocs } from './firebase/firebase.utils';
import { auth, createUserProfileDoc } from './firebase/firebase.utils';


// const App = ( { currentUser, setCurrentUser, kitchenCollectionArray } ) => {
const App = ( { currentUser, setCurrentUser } ) => {

  let unsubscribeFormAuth = useRef(null);

  useEffect(() => {
    unsubscribeFormAuth.current = auth.onAuthStateChanged(async userAuth => {
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
      // addCollectionAndDocs('collections', kitchenCollectionArray.map(({ title, items }) => ({ title, items })));

      return () => unsubscribeFormAuth;
    });
  // }, [setCurrentUser, kitchenCollectionArray]);
}, [setCurrentUser]);


  return (
    <div className="app">
      <Sidebar />
      <ScrollArrow />
      
      <Switch >
        <Route exact path='/' component={Home} />
        <Route path='/kitchen' component={Kitchen} />
        <Route exact path='/signin' component={() => currentUser ? <Redirect to='/' /> : <SignIn />} />
        <Route exact path='/signup' component={() => currentUser ? <Redirect to='/' /> : <SignUp />} />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // kitchenCollectionArray: selectKitchenCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

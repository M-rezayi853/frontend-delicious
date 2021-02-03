// import React, { useEffect, useRef } from 'react';
import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Sidebar from './components/sidebar/sidebar';
import ScrollArrow from './components/scrollArrow/scrollArrow';
// import Home from './pages/home/home';
// import Kitchen from './pages/kitchen/kitchen';
// import SignIn from './pages/signIn/signIn';
// import SignUp from './pages/signUp/signUp';
// import Checkout from './pages/checkout/checkout';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/errorBoundary/errorBoundary';
import './App.scss';

import { selectCurrentUser } from './redux/user/user.selectors';
// import { setCurrentUser } from './redux/user/user.actions';
// import { selectKitchenCollectionsForPreview } from './redux/kitchen/kitchen.selectors';

// import { auth, createUserProfileDoc, addCollectionAndDocs } from './firebase/firebase.utils';
// import { auth, createUserProfileDoc } from './firebase/firebase.utils';

import { checkUserSession } from './redux/user/user.actions';


const Home = lazy(() => import('./pages/home/home'));
const Kitchen = lazy(() => import('./pages/kitchen/kitchen'));
const SignIn = lazy(() => import('./pages/signIn/signIn'));
const SignUp = lazy(() => import('./pages/signUp/signUp'));
const Checkout = lazy(() => import('./pages/checkout/checkout'));
const Aboutme = lazy(() => import('./pages/aboutme/aboutme'));


// const App = ( { currentUser, setCurrentUser, kitchenCollectionArray } ) => {
// const App = ( { currentUser, setCurrentUser, checkUserSession } ) => {
const App = ( { currentUser, checkUserSession } ) => {

  // let unsubscribeFormAuth = useRef(null);

  // useEffect(() => {
  //   unsubscribeFormAuth.current = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDoc(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data()
  //         })
  //       })
  //     }
  //     setCurrentUser(userAuth);
  //     // addCollectionAndDocs('collections', kitchenCollectionArray.map(({ title, items }) => ({ title, items })));

  //     return () => unsubscribeFormAuth;
  //   });
  // // }, [setCurrentUser, kitchenCollectionArray]);
  // }, [setCurrentUser]);


  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);


  return (
    <div className="app">
      <Sidebar />
      <ScrollArrow />
      
      <Switch >
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Home} />
            <Route path='/kitchen' component={Kitchen} />
            <Route exact path='/signin' component={() => currentUser ? <Redirect to='/' /> : <SignIn />} />
            <Route exact path='/signup' component={() => currentUser ? <Redirect to='/' /> : <SignUp />} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/aboutme' component={Aboutme} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // kitchenCollectionArray: selectKitchenCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
  // setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);

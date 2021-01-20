import { call, all, put, takeLatest } from 'redux-saga/effects';

import { UserActionTypes } from './user.types';
import { 
    signOutSuccess,
    signOutFailure,
    signInSuccess,
    signInFailure,
    signUpSuccess,
    signUpFailure
} from './user.actions';
import { auth, createUserProfileDoc, provider, getCurrentUser } from '../../firebase/firebase.utils';



// let unsubscribeFormAuth = useRef(null);
// useEffect(() => {
//     unsubscribeFormAuth.current = auth.onAuthStateChanged(async userAuth => {
//     if (userAuth) {
//         const userRef = await createUserProfileDoc(userAuth);
//         userRef.onSnapshot(snapShot => {
//             setCurrentUser({
//                 id: snapShot.id,
//                 ...snapShot.data()
//             })
//         })
//     }
//     setCurrentUser(userAuth);
//     return () => unsubscribeFormAuth;
//     });
// });

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDoc, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
    } catch(error) {
        yield put(signInFailure(error));
    };
};


// try {
//     await auth.signInWithEmailAndPassword(email, password);
//     setState({
//         email: '',
//         password: ''
//     });
// } catch (error) {
//     console.log(error);
//     alert(error);
// }

export function* signInEmail( { payload: { email, password } } ) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    };
};

export function* onSignInEmailStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_EMAIL_START, signInEmail);
};


// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters( { prompt: 'select_account' } );
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

export function* signInGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(provider);
        yield getSnapshotFromUserAuth(user);
    } catch(error) {
        yield put(signInFailure(error));
    };
};

export function* onSignInGoogleStart() {
    yield takeLatest(UserActionTypes.SIGN_IN_GOOGLE_START,signInGoogle);
};


export function* checkUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch(error) {
        yield put(signInFailure(error));
    };
};

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserAuthenticated);
};


// auth.signOut()

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch(error) {
        yield put(signOutFailure(error));
    };
};

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
};


// try {
//     const { user } = await auth.createUserWithEmailAndPassword(email, password);
//     await createUserProfileDoc(user, { displayName });

//     setState({
//         displayName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
// } catch (error) {
//     console.error(error);
//     alert(error);
// }


export function* signUp( { payload: { email, password, displayName } } ) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess( { user, additionalData: { displayName } } ));
    } catch(error) {
        yield put(signUpFailure(error));
    };
};

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
};


export function* signInAfterSignUp( { payload: { user, additionalData } } ) {
    yield getSnapshotFromUserAuth(user, additionalData);
};

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
};

export function* userSagas () {
    yield all([
        call(onSignOutStart),
        call(onSignInGoogleStart),
        call(onSignInEmailStart),
        call(onCheckUserSession),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
};
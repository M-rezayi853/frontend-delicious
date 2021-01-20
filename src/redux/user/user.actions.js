import { UserActionTypes } from './user.types';

// export const setCurrentUser = user => ({
//     type: UserActionTypes.SET_CURRENT_USER,
//     payload: user
// });


export const signInGoogleStart = () => ({
    type: UserActionTypes.SIGN_IN_GOOGLE_START
});

export const signInEmailStart = (emailAndPassword) => ({
    type: UserActionTypes.SIGN_IN_EMAIL_START,
    payload: emailAndPassword
});

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = (errorMessage) => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: errorMessage
});


export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});


export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = errorMessage => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: errorMessage
});


export const signUpStart = (emailAndPassword) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: emailAndPassword
});

export const signUpSuccess = ( { user, additionalData } ) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});

export const signUpFailure = (errorMessage) => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: errorMessage
});
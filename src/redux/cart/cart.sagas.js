import { all, put, takeLatest, call } from 'redux-saga/effects';

import { UserActionTypes } from '../user/user.types';
import { clearCart } from './cart.actions';


export function* clearCartTotaly() {
    yield put(clearCart())
};

export function* onClearCartStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartTotaly);
};

export function* cartSagas() {
    yield all([
        call(onClearCartStart)
    ]);
};
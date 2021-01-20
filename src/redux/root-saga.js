import { all, call } from 'redux-saga/effects';

import { kitchenSagas } from './kitchen/kitchen.sagas';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';


export default function* rootSaga() {
    yield all([
        call(kitchenSagas),
        call(userSagas),
        call(cartSagas)
    ]);
};
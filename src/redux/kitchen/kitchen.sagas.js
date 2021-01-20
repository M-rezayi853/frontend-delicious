import { takeLatest, call, put, all } from 'redux-saga/effects';

import { KitchenActionTypes } from './kitchen.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './kitchen.actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


export function* fetchCollectionsAsync () {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error));
    };
};

// export const fetchCollectionsStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());

//         collectionRef.get().then(async snapshot => {
//             const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//             // updateKitchenCollections(collectionsMap);
//             dispatch(fetchCollectionsSuccess(collectionsMap));

//             // setIsLoading(false);
//         }).catch (error => dispatch(fetchCollectionsFailure(error.message)));
//     };
// };


export function* onFetchCollectionsStart () {
    yield takeLatest(KitchenActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
};


export function* kitchenSagas () {
    yield all ([
        call(onFetchCollectionsStart)
    ]);
};
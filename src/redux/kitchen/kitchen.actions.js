import { KitchenActionTypes } from './kitchen.types';
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
    type: KitchenActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionMap) => ({
    type: KitchenActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
    type: KitchenActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});


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
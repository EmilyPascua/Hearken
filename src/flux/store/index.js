import thunk from 'redux-thunk';
import ReduxDevTools from '../../utils/DevTools';
import createRootReducer from '../reducers';
import history from './history';
import firebase from '../../config/firebase';
import { createStore,applyMiddleware,compose } from 'redux';
import { reduxFirestore,getFirestore } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';

const rootReducer = createRootReducer(history);

const enhancer = compose(
    // allow actions to fetch Firebase and Firestore objects
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // prepares redux for firestore state
    reduxFirestore(firebase),
    // TODO: REMOVE ON PRODUCTION
    ReduxDevTools.instrument(),
);

export const storeConfig = initialState => {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    );
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        });
    }
    return store;
}
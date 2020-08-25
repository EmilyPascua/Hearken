import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer} from 'redux-form';
import homeReducer from './homeReducer';

const createRootReducer = history => 
    combineReducers({
        form: formReducer, // Redux-Form
        router: connectRouter(history),
        firebase: firebaseReducer, // React-Redux-Firebase
        firestore: firestoreReducer, //Redux-Firestore
        home: homeReducer,
    });

export default createRootReducer;
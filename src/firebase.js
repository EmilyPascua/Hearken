//firebase configurations: Preliminary setup for firebase in this application
import firebase from 'firebase'
import DotEnv from 'dotenv';
import { createFirestoreInstance, reduxFirestore } from 'redux-firestore';

DotEnv.config();

//Env contains all the sensitive information
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

/**
 * React-Redux-Firebase config: uses users from firebase for redux state
 */
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, 
    enableClaims: true,
};

firebase.initializeApp(config); //basic configuration
firebase.functions(); //backend triggers
firebase.firestore(); //firestore database management
  
/**
 * store will be from the redux store we create for the application
 * @param {object} store
 * @returns {object} configuration 
 */
export const initiate = (store) => ({
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
});

/**
 * Redux-Firestore config
 */
const rfConfig = {};
  
export const enhanceStore = reduxFirestore(firebase, rfConfig);
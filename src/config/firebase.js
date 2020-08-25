//firebase configurations: Preliminary setup for firebase in this application
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/functions';
import 'firebase/firestore';
import DotEnv from 'dotenv';
import { createFirestoreInstance } from 'redux-firestore';

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

firebase.initializeApp(config); //basic configuration
firebase.functions(); //backend triggers
firebase.firestore(); //firestore database management

export const rrfSetup = store => ({
	firebase,
	config: {},
	dispatch: store.dispatch,
	createFirestoreInstance
})
  
export default firebase;
import Firebase from 'firebase'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyD6zJnDuspSlYk8aMkRSrf3-zSHNu6mrPI',
    authDomain: 'hearken-e2343.firebaseapp.com',
    databaseURL: 'https://hearken-e2343.firebaseio.com',
    projectId: 'hearken-e2343',
    storageBucket: 'hearken-e2343.appspot.com',
    messagingSenderId: '745486021223',
    appId: '745486021223:web:53b4cb0f3fbe30db611ac2',
    measurementId: 'G-TZM66GNMWC'
}
const instance = Firebase.initializeApp(firebaseConfig);

export default instance
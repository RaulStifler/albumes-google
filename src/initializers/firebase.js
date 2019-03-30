import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC3M463br_XhZUxvN0rHGNZGGODINPJaYc",
    authDomain: "albumes-app.firebaseapp.com",
    databaseURL: "https://albumes-app.firebaseio.com",
    projectId: "albumes-app",
    storageBucket: "albumes-app.appspot.com",
    messagingSenderId: "179681465194"
};
firebase.initializeApp(config);

export default firebase;
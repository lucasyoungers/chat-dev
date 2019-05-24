import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBHw-8AwrJmT5bL3pT0i04oK8U_F-AmIw0",
    authDomain: "chat-dev-ly.firebaseapp.com",
    databaseURL: "https://chat-dev-ly.firebaseio.com",
    projectId: "chat-dev-ly",
    storageBucket: "chat-dev-ly.appspot.com",
    messagingSenderId: "631000072907",
    appId: "1:631000072907:web:9b4a765ad8d96e62"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
    timestampsInSnapshots: true
});

export default firebaseApp.firestore();
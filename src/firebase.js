import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
apiKey:
authDomain:
databaseURL
projectId:
storageBucket:
messagingSenderId:
appId:
measurementId:
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage=fireabase.storage();







//export default db;
import firebase
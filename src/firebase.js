import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
apiKey:"AizaSyDBUBLX0ZWVi2b",
authDomain:"instagram-clone-react.firebase,com",
databaseURL:"https://instagram-clone-react.firebaseio.com",
projectId:"instagram-clone-react",
storageBucket:"instagram-clone-react-appspot.com",
messagingSenderId:"",
appId:"1:102613421144:web",
measurementId:"G-XB173J9F0D",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage=fireabase.storage();







//export default db;
import firebase
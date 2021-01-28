import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBGZYyAFnrkbxExgzAwydQPH8wbZJbv98E",
    authDomain: "tik-tok-clone-2d477.firebaseapp.com",
    projectId: "tik-tok-clone-2d477",
    storageBucket: "tik-tok-clone-2d477.appspot.com",
    messagingSenderId: "774575210008",
    appId: "1:774575210008:web:fc78885f0efad611d60d6d"
};

const firebaseApp = 
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
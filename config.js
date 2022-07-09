import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8g_vjveXP9jGFpERjQUksnXvWAHXolsg",
  authDomain: "elib-8e3f4.firebaseapp.com",
  databaseURL: "https://elib-8e3f4-default-rtdb.firebaseio.com",
  projectId: "elib-8e3f4",
  storageBucket: "elib-8e3f4.appspot.com",
  messagingSenderId: "247484696705",
  appId: "1:247484696705:web:27b3fe84bddc102734a580"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();

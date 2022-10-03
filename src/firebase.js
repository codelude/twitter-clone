import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvkGfLqXhjNn8_j84DSdi2Bu0QMeaTBaI",
  authDomain: "twitter-clone-ff42e.firebaseapp.com",
  databaseURL: "https://twitter-clone-ff42e.firebaseio.com",
  projectId: "twitter-clone-ff42e",
  storageBucket: "twitter-clone-ff42e.appspot.com",
  messagingSenderId: "22518606403",
  appId: "1:22518606403:web:f0e6f687f5bcd8aa8d02f6",
  measurementId: "G-N8K3CHWNXQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

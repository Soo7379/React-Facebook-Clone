import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAj7KBj2oElIn5oYnoUNJk5UTtzv0NrOoQ",
  authDomain: "react-facebook-clone-178e0.firebaseapp.com",
  databaseURL: "https://react-facebook-clone-178e0.firebaseio.com",
  projectId: "react-facebook-clone-178e0",
  storageBucket: "react-facebook-clone-178e0.appspot.com",
  messagingSenderId: "479462423125",
  appId: "1:479462423125:web:93c9b5877b0ca7868c32dc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

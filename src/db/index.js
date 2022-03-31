import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// const firebaseapp = firebase.initializeApp(firebaseConfig);
// firebaseapp.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
// export default firebaseapp.firestore()
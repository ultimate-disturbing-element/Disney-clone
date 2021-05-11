import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBus84zLS0drMQSPmZblMwWoA2gbar1XvU",
    authDomain: "disney-clone-ea6c3.firebaseapp.com",
    projectId: "disney-clone-ea6c3",
    storageBucket: "disney-clone-ea6c3.appspot.com",
    messagingSenderId: "339895297276",
    appId: "1:339895297276:web:30912b3cf6db5687f72379",
    measurementId: "G-R7M7ZNY0DQ"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;

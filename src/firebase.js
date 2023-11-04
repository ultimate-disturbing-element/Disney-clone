import firebase from 'firebase';


const firebaseConfig = {
     apiKey: "AIzaSyBre1omtRhnuU2zUhD14cMNkjHIV0KYgFw",
     authDomain: "disneyclonereact.firebaseapp.com",
     projectId: "disneyclonereact",
     storageBucket: "disneyclonereact.appspot.com",
     messagingSenderId: "730759567375",
     appId: "1:730759567375:web:737beac0c86549a529ab7a",
     measurementId: "G-SV5XSY4TGK"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth,provider,storage};
  export default db;

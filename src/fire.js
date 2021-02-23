import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBOWDKOpDi6iRKGZbAri0gJuikiA65vfDk",
    authDomain: "todo-kuriam-57993.firebaseapp.com",
    projectId: "todo-kuriam-57993",
    storageBucket: "todo-kuriam-57993.appspot.com",
    messagingSenderId: "282043667855",
    appId: "1:282043667855:web:7f948f9e498d3f496227fa",
    measurementId: "G-PLBWYQETQ0"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;
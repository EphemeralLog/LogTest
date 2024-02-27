// Initialize Firebase
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpwNUpZtc-4EiN8nSCSUYNPDItpTHewUQ",
  authDomain: "logtest-2-26-24.firebaseapp.com",
  projectId: "logtest-2-26-24",
  storageBucket: "logtest-2-26-24.appspot.com",
  messagingSenderId: "989954378386",
  appId: "1:989954378386:web:034705e49c802a883cb44b",
  measurementId: "G-P67FNQSD57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/

  // Sign Up
  function signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("User signed up:", user.uid);
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sign up error:", errorCode, errorMessage);
      });
  }
  
  // Log In
  function logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log("User logged in:", user.uid);
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Log in error:", errorCode, errorMessage);
      });
  }
  
  // Log Out
  function logOut() {
    firebase.auth().signOut()
      .then(() => {
        // Sign-out successful
        console.log("User signed out");
      })
      .catch((error) => {
        // Handle errors
        console.error("Sign out error:", error);
      });
  }
  
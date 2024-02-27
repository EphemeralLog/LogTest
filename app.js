import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";

// Firebase initialization 
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
  const analytics = getAnalytics(app);
  
// Sign Up Form
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  signUp(email, password);
  signupForm.reset();
});

// Log In Form
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  logIn(email, password);
  loginForm.reset();
});

// Loadout Management
const addLoadoutBtn = document.getElementById("add-loadout");
addLoadoutBtn.addEventListener("click", () => {
  const userId = firebase.auth().currentUser.uid; // Assuming user is logged in
  const loadoutData = { weapon: "MP5", attachments: ["Suppressor", "Grip"] }; // Example loadout data
  addLoadout(userId, loadoutData);
});

const getLoadoutBtn = document.getElementById("get-loadout");
getLoadoutBtn.addEventListener("click", () => {
  const userId = firebase.auth().currentUser.uid; // Assuming user is logged in
  getLoadout(userId);
});

const updateLoadoutBtn = document.getElementById("update-loadout");
updateLoadoutBtn.addEventListener("click", () => {
  const userId = firebase.auth().currentUser.uid; // Assuming user is logged in
  const updatedLoadoutData = { weapon: "M4A1", attachments: ["Grip", "Red Dot Sight"] }; // Updated loadout data
  updateLoadout(userId, updatedLoadoutData);
});

const deleteLoadoutBtn = document.getElementById("delete-loadout");
deleteLoadoutBtn.addEventListener("click", () => {
  const userId = firebase.auth().currentUser.uid; // Assuming user is logged in
  deleteLoadout(userId);
});

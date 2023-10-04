// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getRedirectResult,signInWithRedirect, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASNYRY2eV0vOP6ao7LSOSFBmxDUyQoKtk",
  authDomain: "shopkaro-9d9af.firebaseapp.com",
  projectId: "shopkaro-9d9af",
  storageBucket: "shopkaro-9d9af.appspot.com",
  messagingSenderId: "1026795024564",
  appId: "1:1026795024564:web:32a8981444b7b43c6b67e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider = new GoogleAuthProvider();

export {app,auth,provider};
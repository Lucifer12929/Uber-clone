// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZH6KE_deeibe_IPH3f5sdmhZIAfkFZmo",
  authDomain: "uber-clone-2542b.firebaseapp.com",
  projectId: "uber-clone-2542b",
  storageBucket: "uber-clone-2542b.appspot.com",
  messagingSenderId: "102552102147",
  appId: "1:102552102147:web:95211191d9431ba2507536",
  measurementId: "G-5GRNHF05ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider()
const auth=getAuth()

export {app,provider,auth}
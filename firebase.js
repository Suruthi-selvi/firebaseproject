// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZ1gm1CIVLCCw0GVIrsdA2Qhu_HHY_eg8",
  authDomain: "sample-1359b.firebaseapp.com",
  projectId: "sample-1359b",
  storageBucket: "sample-1359b.appspot.com",
  messagingSenderId: "678684523674",
  appId: "1:678684523674:web:0c432c15289faa41837323",
  measurementId: "G-K7SDCBMHM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const googleProvider = new GoogleAuthProvider();

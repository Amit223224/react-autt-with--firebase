
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey:  "AIzaSyBLku4dM2OHmQE1sCw1k2QDzlR5ezGCv3Y"  ,
  authDomain:    "react-login-3a06d.firebaseapp.com",
  projectId:    "react-login-3a06d",
  storageBucket:  "react-login-3a06d.appspot.com",
  messagingSenderId:  "991729912402",
  appId:"1:991729912402:web:61127eed0374aca6fc6d8b" ,
};

const app = initializeApp(firebaseConfig);
 const  auth =   getAuth(app);
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
export {auth , facebookProvider, googleProvider};

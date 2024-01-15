// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCgueo1jxyRruSjch8UIGSQkDND74hrLyg",
  authDomain: "hotstar-clone-70e57.firebaseapp.com",
  projectId: "hotstar-clone-70e57",
  storageBucket: "hotstar-clone-70e57.appspot.com",
  messagingSenderId: "489774705735",
  appId: "1:489774705735:web:e393ad00834a3d86aa9562",
  measurementId: "G-NWVPFLKSVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}
// Import initialize App
import { initializeApp } from "firebase/app";
//import firebase Config
import firebaseConfig from "./firebase.config";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;
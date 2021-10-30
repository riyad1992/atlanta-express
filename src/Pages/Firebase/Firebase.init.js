import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAtentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAtentication;
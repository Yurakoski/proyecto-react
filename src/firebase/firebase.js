import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDazpMLMjbVrdy6llYlodbaWrfMXSsj0rY",
  authDomain: "proyecto-react-52d2e.firebaseapp.com",
  projectId: "proyecto-react-52d2e",
  storageBucket: "proyecto-react-52d2e.appspot.com",
  messagingSenderId: "1008727332383",
  appId: "1:1008727332383:web:78413443411dd532bc672a"
}; 

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCZnqoLfCSborUa-U-7sXGYrgJ0CDMfhEs",
  authDomain: "backendcrud-ea80e.firebaseapp.com",
  databaseURL: "https://backendcrud-ea80e-default-rtdb.firebaseio.com",
  projectId: "backendcrud-ea80e",
  storageBucket: "backendcrud-ea80e.appspot.com",
  messagingSenderId: "242613506971",
  appId: "1:242613506971:web:72091ac0ee094b8376473e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


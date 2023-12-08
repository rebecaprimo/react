import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdnEuN_QQAkHG994xyy2HmTJbeaUAPvlk",
  authDomain: "expense-tracker-36293.firebaseapp.com",
  projectId: "expense-tracker-36293",
  storageBucket: "expense-tracker-36293.appspot.com",
  messagingSenderId: "107310237329",
  appId: "1:107310237329:web:045bccf326afb549df6130",
  measurementId: "G-Q062VWCTP0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

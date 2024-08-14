import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, signOut } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAaoXA0qDjkyk7KrHjNR5M_MxMbl1Iax4k",
  authDomain: "movie-watchlist-8c01b.firebaseapp.com",
  projectId: "movie-watchlist-8c01b",
  storageBucket: "movie-watchlist-8c01b.appspot.com",
  messagingSenderId: "626512211928",
  appId: "1:626512211928:web:7219b15715e6870cfeccad",
  measurementId: "G-TB30FNEJB3"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth, db, signOut}
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDcapYKNVis3qyP6_wl0NIJMzLAehrRcOI",
	authDomain: "linkey-1ef14.firebaseapp.com",
	projectId: "linkey-1ef14",
	storageBucket: "linkey-1ef14.appspot.com",
	messagingSenderId: "882424484685",
	appId: "1:882424484685:web:e57d241a31fadd1b8b9d04",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, derived, type Readable } from "svelte/store";
import type { UserData } from "../app";

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
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * @returns a store with realtime updates on the user's authentication state
 */
function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();

// ~Usage~
// onSnapshot(doc, (snapshot) = {
// 	// Handle realtime changes here
// })

/**
 * @param  {string} path document path or reference
 * @returns a store with strongly typed realtime updates on document data
 */
export function docStore<T>(path: string) {
  let unsubscribe: () => void;

  const docRef = doc(db, path);

  const { subscribe } = writable<T | null>(null, (set) => {
    unsubscribe = onSnapshot(docRef, (snapshot) => {
      set((snapshot.data() as T) ?? null);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
    ref: docRef,
    id: docRef.id,
  };
}

interface UserData {
  username: string;
  bio: string;
  photoURL: string;
  published: boolean;
  links: any[];
}

// This way, we can easily access the user's data anywhere in the application with realtime updates
/**
 * @param  {Readable<User>} user
 * @returns a store with realtime updates on the user's document data
 */
export const userData: Readable<UserData | null> = derived(
  user,
  ($user, set) => {
    if ($user) {
      // If the user is logged in, subscribe to their document by using their UID
      return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
    } else {
      // If the user is not logged in, set the store to null
      set(null);
    }
  }
);

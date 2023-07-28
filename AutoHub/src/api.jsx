import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const carsCollectionRef = collection(db, "cars");

export async function getCars() {
  const querySnapshot = await getDocs(carsCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getCar(id) {
  const docRef = doc(db, "cars", id);
  const carSnapshot = await getDoc(docRef);
  return {
    ...carSnapshot.data(),
    id: carSnapshot.id,
  };
}

export async function getHostCars() {
  const q = query(carsCollectionRef, where("hostId", "==", 3));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function loginUser(creds) {
  const auth = getAuth();
  try {
    const user = await signInWithEmailAndPassword(
      auth,
      creds.email,
      creds.password
    );

    return user;
  } catch (error) {
    console.log(error.message);
    throw new Error("Login failed. Please check your email and password.");
  }
}

const logOut = async () => {
  await signOut(auth);
};

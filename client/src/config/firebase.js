// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6cLCUcFc2-canJXey265af4Z6uZNInHk",
  authDomain: "images-1c116.firebaseapp.com",
  projectId: "images-1c116",
  storageBucket: "images-1c116.appspot.com",
  messagingSenderId: "1089914550759",
  appId: "1:1089914550759:web:b66182e25c0f01141b2542",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };

// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import { getStorage } from "firebase/storage";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBetQrnMi3ER29B4dUVwRbtm5RedpY3lJo",
  authDomain: "todolist-a23e3.firebaseapp.com",
  projectId: "todolist-a23e3",
  storageBucket: "todolist-a23e3.appspot.com",
  messagingSenderId: "245858911270",
  appId: "1:245858911270:web:06bd83fab591869fbe52e7",
  measurementId: "G-00JRF4EF0P",
};

// Initialize Firebase

// if (!firebase.apps.length) {
//   const app = firebase.initializeApp(firebaseConfig);
//   const storage = getStorage(app);
// }
const app = firebase.initializeApp(firebaseConfig);
// const storage = getStorage(app);

export { firebase };

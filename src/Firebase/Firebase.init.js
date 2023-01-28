// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSYemq0I9FgEhbXC5bvIAVzqz0QTUqzyA",
  authDomain: "druoecommerce.firebaseapp.com",
  projectId: "druoecommerce",
  storageBucket: "druoecommerce.appspot.com",
  messagingSenderId: "641089367393",
  appId: "1:641089367393:web:77f16ed87cc43a64c22920",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

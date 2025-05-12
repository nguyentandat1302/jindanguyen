// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKo83iCrLlCKYxaTTEhf99Crthd64FeIc",
  authDomain: "jinda-nguyen.firebaseapp.com",
  projectId: "jinda-nguyen",
  storageBucket: "jinda-nguyen.firebasestorage.app",
  messagingSenderId: "125271429814",
  appId: "1:125271429814:web:cd79ee9cf3b0e91cfecc17",
  measurementId: "G-Y11JTDDLXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
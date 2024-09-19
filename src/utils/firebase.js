// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvHPkdvOGrg_TxOKGhjNxYnX7_CO6Xm10",
  authDomain: "foody-9a781.firebaseapp.com",
  projectId: "foody-9a781",
  storageBucket: "foody-9a781.appspot.com",
  messagingSenderId: "34923403552",
  appId: "1:34923403552:web:693bdf87efff07bc661f45",
  measurementId: "G-VNRNN66ZMF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

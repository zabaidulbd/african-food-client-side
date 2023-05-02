// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtiylKIYEjMtmk5NtvFzufTsqWyAFVpNg",
    authDomain: "assignment-ten-client-side.firebaseapp.com",
    projectId: "assignment-ten-client-side",
    storageBucket: "assignment-ten-client-side.appspot.com",
    messagingSenderId: "47481877456",
    appId: "1:47481877456:web:aaaebcf1b94fcd7a3abfd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
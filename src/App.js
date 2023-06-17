import './App.css';
 import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Nav from './components/Nav/Nav';


function App() {
  // Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAcNVogcaTxpGQiKMthzub_Tp9D09-RB8",
  authDomain: "portfolio-2b296.firebaseapp.com",
  projectId: "portfolio-2b296",
  storageBucket: "portfolio-2b296.appspot.com",
  messagingSenderId: "1043124828522",
  appId: "1:1043124828522:web:5922b5ad38b93918fa0d13",
  measurementId: "G-E6T46LDXD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  return (
    <Nav/>
  );
}

export default App;

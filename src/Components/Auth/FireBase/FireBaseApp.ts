import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDqGp4DLuqR0T28tmfnhFfXqo05Uy5s8FU",
  authDomain: "carvanax-5b62f.firebaseapp.com",
  projectId: "carvanax-5b62f",
  storageBucket: "carvanax-5b62f.firebasestorage.app",
  messagingSenderId: "339608472175",
  appId: "1:339608472175:web:f9eaf17f6bcfba94e0db9a",
  measurementId: "G-SQ71HEG2QJ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const analytics = getAnalytics(app);

export { auth, analytics };

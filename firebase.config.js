
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCLdiVnUJ01QiO5dj7o2siGwnVKFRxMTHw",
  authDomain: "firecrud-7010e.firebaseapp.com",
  projectId: "firecrud-7010e",
  storageBucket: "firecrud-7010e.firebasestorage.app",
  messagingSenderId: "463817116062",
  appId: "1:463817116062:web:447a81cddef792945cee8f",
  measurementId: "G-Y0QFXZGD1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig

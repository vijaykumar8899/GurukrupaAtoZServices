// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFTnMprGYZgNtt4dHCCw5Y85kOAUPker0",
    authDomain: "gurukrupa-a-z-services.firebaseapp.com",
    projectId: "gurukrupa-a-z-services",
    storageBucket: "gurukrupa-a-z-services.appspot.com",
    messagingSenderId: "117626689014",
    appId: "1:117626689014:web:08e7c65b809d95ff3d63d7",
    measurementId: "G-E053V9J2LN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
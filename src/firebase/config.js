import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyCYPILFeGZcS0fVnVhpVy5cUNEYfbC_kMU",
  authDomain: "fir-auth-30b48.firebaseapp.com",
  projectId: "fir-auth-30b48",
  storageBucket: "fir-auth-30b48.firebasestorage.app",
  messagingSenderId: "432787278145",
  appId: "1:432787278145:web:08637f2b32b27ce3d8f9c0",
  measurementId: "G-PMYSPXQ14N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBLRGayvw-djS4xXxiDdzgnRZjPfvK2fJo",
  authDomain: "news-aggregator-cd310.firebaseapp.com",
  projectId: "news-aggregator-cd310",
  storageBucket: "news-aggregator-cd310.firebasestorage.app",
  messagingSenderId: "16643256773",
  appId: "1:16643256773:web:985379266160abda915bac",
  measurementId: "G-R6JP0E56LH"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
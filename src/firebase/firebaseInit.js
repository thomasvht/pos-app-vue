import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDBEJL9zHkk8yA8BLqmHKxMrvHaxE0A3cA",
  authDomain: "pos-app-vue.firebaseapp.com",
  projectId: "pos-app-vue",
  storageBucket: "pos-app-vue.appspot.com",
  messagingSenderId: "768483401939",
  appId: "1:768483401939:web:080b301224874ddebe7426",
  measurementId: "G-ZM4GQHELDP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export {
  db
}
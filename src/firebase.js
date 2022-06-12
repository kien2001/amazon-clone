import { initializeApp } from 'firebase/app'

import { getFirestore } from "firebase/firestore";

import { collection, doc, setDoc, getDocs } from "firebase/firestore";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArTmW39whHMoEpKIlx2BJG4d9IGNJzM5U",
    authDomain: "clone-2bd19.firebaseapp.com",
    projectId: "clone-2bd19",
    storageBucket: "clone-2bd19.appspot.com",
    messagingSenderId: "205510239065",
    appId: "1:205510239065:web:cd0a94798af7563447e248",
    measurementId: "G-P4NGMRCD12"
};
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);

(async function () {
    const productsRef = collection(db, "products");
    await setDoc(doc(productsRef, "pr1"), {
        id: 1,
        title: "Oculus Quest All-in-one VR Gaming Headset – 64GB",
        image: "https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg",
        price: 11.96,
        rating: 4
    });
    await setDoc(doc(productsRef, "pr2"), {
        id: 2,
        title: "Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)",
        image: "https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US327_FMwebp_QL65_.jpg",
        price: 15.96,
        rating: 3
    });
    await setDoc(doc(productsRef, "pr3"), {
        id: 3,
        title: "Xbox game",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B5ECC8E3DA42415._V531815325_.jpg",
        price: 23.96,
        rating: 5
    });
    await setDoc(doc(productsRef, "pr4"), {
        id: 4,
        title: "The LeanStartup2: How constant innovative creators",
        image: "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg",
        price: 9.96,
        rating: 4
    });
    await setDoc(doc(productsRef, "pr5"), {
        id: 5,
        title: "Play station game pad",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B638E86650FFF18._V531815327_.jpg",
        price: 19.96,
        rating: 5
    });
    await setDoc(doc(productsRef, "pr6"), {
        id: 6,
        title: "Play station game pad",
        image: "https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2B638E86650FFF18._V531815327_.jpg",
        price: 19.96,
        rating: 5
    });
})()



export { db, auth }

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBNRrUOq6c5RvN8untgS98t1uMySfTzJ44',
    authDomain: 'realsocial-b7b6a.firebaseapp.com',
    projectId: 'realsocial-b7b6a',
    storageBucket: 'realsocial-b7b6a.appspot.com',
    messagingSenderId: '624168100001',
    appId: '1:624168100001:web:1536940323e9bdc11d90e0',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

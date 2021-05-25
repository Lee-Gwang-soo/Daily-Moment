import firebase from 'firebase/app';
import 'firebase/auth'; // firebase의 Auth 기능
import 'firebase/firestore'; // firebase의 DB 기능

const firebaseConfig = {
	apiKey: 'AIzaSyDsl1H0ooKzzoBwYVLuGOd_887KYO5nSko',
	authDomain: 'daily-moments-a14ca.firebaseapp.com',
	projectId: 'daily-moments-a14ca',
	storageBucket: 'daily-moments-a14ca.appspot.com',
	messagingSenderId: '456978711305',
	appId: '1:456978711305:web:b77e263d676341ad8dc9d8',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const firestore = app.firestore();

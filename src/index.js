import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAokNfOn-EHAcoQ8reacXCZGh8kfg-b1EM",
  authDomain: "cart-1fd70.firebaseapp.com",
  projectId: "cart-1fd70",
  storageBucket: "cart-1fd70.appspot.com",
  messagingSenderId: "51545134601",
  appId: "1:51545134601:web:dd19e8463013385ee44ad8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

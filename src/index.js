import ReactDOM from 'react-dom';
import App from './App';
import "./App.css"

import firebase from 'firebase/app';
import 'firebase/firestore';

  firebase.initializeApp({
    apiKey: "AIzaSyCuPCy3mYwVZZ4RhkpeN-eQfd7_blN2lZw",
    authDomain: "notes-app-7d2b1.firebaseapp.com",
    projectId: "notes-app-7d2b1",
    storageBucket: "notes-app-7d2b1.appspot.com",
    messagingSenderId: "534691173040",
    appId: "1:534691173040:web:2f0febe0dab0b6de6b6175"
  });

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
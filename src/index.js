import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var config = {
    apiKey: "AIzaSyBkxbve3Hm16xRIUuILTWkUzyX9p0IfCMQ",
    authDomain: "pruebas-react-875af.firebaseapp.com",
    databaseURL: "https://pruebas-react-875af.firebaseio.com",
    projectId: "pruebas-react-875af",
    storageBucket: "pruebas-react-875af.appspot.com",
    messagingSenderId: "219318603552"
  };
  
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

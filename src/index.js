import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import firebase from 'firebase';
import './home-ani';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDpidiJZ_bbGfknCi0AYVmqVNXk5Vhh5Mw",
    authDomain: "research-app-57a1a.firebaseapp.com",
    databaseURL: "https://research-app-57a1a.firebaseio.com",
    projectId: "research-app-57a1a",
    storageBucket: "research-app-57a1a.appspot.com",
    messagingSenderId: "1046793302242"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

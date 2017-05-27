import { config } from '../firebase.config';
const css = require('./styles/base.scss');
var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

firebase.initializeApp(config);

var database = firebase.database().ref('test')
database.on('value', snapshot => {
    console.log(snapshot.val());
});
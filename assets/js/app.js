// set working variables
var player1 = null;
var player2 = null;
var player1Name = "";
var player2Name = "";
var yourPlayerName = "";
var player1Choice = "";
var player2Choice = "";
var turn = 1;

var firebaseConfig = {
    apiKey: "AIzaSyAhj84J4ZzbzVdCPrl7dfi8MkHsmLMmU8U",
    authDomain: "rps-multiplayer-900a8.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-900a8.firebaseio.com",
    projectId: "rps-multiplayer-900a8",
    storageBucket: "rps-multiplayer-900a8.appspot.com",
    messagingSenderId: "958426526615",
    appId: "1:958426526615:web:0286defa2ec15694384ad2"
  };


var database = firebase.database();


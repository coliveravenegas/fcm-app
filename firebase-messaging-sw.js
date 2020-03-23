// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.12.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDYpBOMPM1GYj6t8pomsNiK8omZ1dQWWsE",
  authDomain: "fir-tutorial-f8888.firebaseapp.com",
  databaseURL: "https://fir-tutorial-f8888.firebaseio.com",
  projectId: "fir-tutorial-f8888",
  storageBucket: "fir-tutorial-f8888.appspot.com",
  messagingSenderId: "639306362612",
  appId: "1:639306362612:web:2394f8b9e733d2b1adb8a1",
  measurementId: "G-SF5BNFHBTE"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker
//   `messaging.setBackgroundMessageHandler` handler.
messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  // ...
});

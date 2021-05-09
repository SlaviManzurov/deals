import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAcwpR0TzWNnCHf-kVI9Nht9HivyGxwO9A",
    authDomain: "deals-adc43.firebaseapp.com",
    projectId: "deals-adc43",
    storageBucket: "deals-adc43.appspot.com",
    messagingSenderId: "31735799391",
    appId: "1:31735799391:web:c42d3af983b6217791c5ea"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('User Logged In')
    } else {
        console.log('User Logged Out')
    }
  });

export default firebase;

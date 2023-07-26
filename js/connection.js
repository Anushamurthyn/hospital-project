const firebaseConfig = {
  apiKey: "AIzaSyC64-tiOOE78nPg591rOnspc0DydDDF2oc",
  authDomain: "firstproject-f290a.firebaseapp.com",
  databaseURL: "https://firstproject-f290a-default-rtdb.firebaseio.com",
  projectId: "firstproject-f290a",
  storageBucket: "firstproject-f290a.appspot.com",
  messagingSenderId: "322214924157",
  appId: "1:322214924157:web:697fcffcd3b6ec1a540614",
  measurementId: "G-3HCME4JZSS"
};
//start the server 
firebase.initializeApp(firebaseConfig);
//create an object
const authentication=firebase.auth()
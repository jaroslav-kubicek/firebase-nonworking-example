import * as firebase from 'firebase';

const onClick = () => {
  const config = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  };
  firebase.initializeApp(config);
  firebase.auth().signInAnonymously()
    .then(() => {
      console.log(firebase.auth().currentUser.uid);
    })
    .catch((error) => console.log(error));	
};

document.querySelector('#firebase').addEventListener('click', onClick, false);

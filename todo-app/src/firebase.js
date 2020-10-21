import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArnsVioYIGZ3C33V_TcFbfZTvpPFkRrdY",
    authDomain: "todo-app-cp-d7872.firebaseapp.com",
    databaseURL: "https://todo-app-cp-d7872.firebaseio.com",
    projectId: "todo-app-cp-d7872",
    storageBucket: "todo-app-cp-d7872.appspot.com",
    messagingSenderId: "65449123521",
    appId: "1:65449123521:web:64abeba4bcdadcf1bf3e40",
    measurementId: "G-L46679XTCE"
  };

  const db = firebaseApp.firestore();

  export {db};
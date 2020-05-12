import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_BASEURL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_ID,
    appId: process.env.VUE_APP_FIREBASE_APPID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENTID
};

firebase.initializeApp(config);
firebase.analytics();

// firebase utils
const database = firebase.database()
const auth = firebase.auth()
const storageRef = firebase.storage().ref()

// firebase collections
const provincesStat = database.ref('provincesStat/')
const provinces = database.ref('provinces/')
const collaborators = database.ref('collaborators/')
const collaboratorImageStore = storageRef.child('collaborators')

export {
    auth,
    provinces,
    provincesStat,
    collaborators,
    collaboratorImageStore
}

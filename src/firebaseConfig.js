import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyAjtbVeO0bhG6Au3DftslTy0jVifjk79Is",
    authDomain: "my-profile-164203.firebaseapp.com",
    databaseURL: "https://my-profile-164203.firebaseio.com",
    projectId: "my-profile-164203",
    storageBucket: "my-profile-164203.appspot.com",
    messagingSenderId: "428141108788",
    appId: "1:428141108788:web:5b0c6a4e26aec97ea4b461",
    measurementId: "G-HXDX38SVBK"
}
firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const database = firebase.database()
const auth = firebase.auth()
// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const investigation = database.ref('/invetigation:')
const provincesCollection = db.collection('provinces')

export {
    db,
    auth,
    provincesCollection,
    investigation
}

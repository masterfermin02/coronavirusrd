import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
import { config } from './firebaseEnv';

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const database = firebase.database()
const auth = firebase.auth()
// date issue fix according to firebase
const settings = {
}
db.settings(settings)

// firebase collections
const investigation = database.ref('invetigation/')
const provinces = database.ref('provinces/')

export {
    db,
    auth,
    provinces,
    investigation
}

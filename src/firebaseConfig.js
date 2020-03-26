import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
import { config } from './firebaseEnv';

firebase.initializeApp(config)

// firebase utils
const database = firebase.database()
const auth = firebase.auth()

// firebase collections
const provincesStat = database.ref('provincesStat/')
const provinces = database.ref('provinces/')

export {
    auth,
    provinces,
    provincesStat
}

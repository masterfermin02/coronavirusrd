import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
import { config } from './firebaseEnv';

firebase.initializeApp(config)

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

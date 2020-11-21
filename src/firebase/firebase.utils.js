import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDmOskRzYLqQTEnmO8KBKYp7zRUw5woUas",
    authDomain: "clothe-shop-db.firebaseapp.com",
    databaseURL: "https://clothe-shop-db.firebaseio.com",
    projectId: "clothe-shop-db",
    storageBucket: "clothe-shop-db.appspot.com",
    messagingSenderId: "188346826206",
    appId: "1:188346826206:web:9b78eda4d0e5a61fdc714f",
    measurementId: "G-TG9S5ECL8T"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
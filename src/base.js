import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZHoItZ4wMeFaaAxzU75WduWIsFRC1wJQ",
    authDomain: "recette-app-a7545.firebaseapp.com",
    databaseURL: "https://recette-app-a7545.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base

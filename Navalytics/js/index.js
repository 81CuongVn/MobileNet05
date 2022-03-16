
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSBcJVIpBa_7xS3sB4OQPQe4FFyeRwgNU",
    authDomain: "mobilene-3b3e6.firebaseapp.com",
    projectId: "mobilene-3b3e6",
    storageBucket: "mobilene-3b3e6.appspot.com",
    messagingSenderId: "988444489494",
    appId: "1:988444489494:web:e80846685491c51f0fc237"
};


const app = initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = firebase.database()


function register() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value

    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line')
        return
    }

    if (validate_field(full_name) == false || validate_field(full_name) == false)


        // Auth

        auth.createUserWithEmailAndPassword(email, password)
            .then(function () {
                var user = auth.currentUser
                alert("User Created!!")

                var database_ref = database.ref()

                // Create user data
                var user_data = {

                    last_login: Date.now()
                }

                database_ref.child('users/ + user.uid').update(user_data)


            })
            .catch(function (error) {
                var error_code = error.code
                var error_message = error.message

                alert(error_message)
            })

    function login() {
        email = document.getElementById('email').value
        password = document.getElementById('password').value


        if (validate_email(email) == false || validate_password(password) == false) {
            alert('Email or Password is Outta Line')
            return
        }

        auth.signInWithEmailAndPassword()
            .then(function () {
                var user = auth.currentUser
                alert("User Created!!")

                var database_ref = database.ref()

                // Create user data
                var user_data = {
                    email: email,
                    password: password,
                    full_name: full_name,
                    last_login: Date.now()
                }

                database_ref.child('users/ + user.uid').set(user_data)


            })
            .catch(function (error) {
                var error_code = error.code
                var error_message = error.message

                alert(error_message)
            })

    }

    function validate_email(email) {
        expression = /^[^@]+@\w+(\.\w+)+\w$/
        if (expression.test(str) == true) {
            return true
        } else {
            return false
        }
    }

    function validate_password(password) {
        if (password < 6) {
            return false
        } else {
            return true
        }
    }

    function validate_field(field) {
        if (field == null) {
            return false
        }
        if (field.lentgh <= 0) {
            return false
        } else {
            return true
        }
    }

}
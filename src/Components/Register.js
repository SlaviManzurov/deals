import firebase from '../utils/firebase'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

import './Register.css'


function Register() {
    let history = useHistory()
    const [error, setError] = useState(null)

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value
        const password = e.target.password.value
        const rePassword = e.target.rePassword.value

        console.log(username, password, rePassword);

        if (password === rePassword) {
            firebase.auth().createUserWithEmailAndPassword(username, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    history.push('/')
                }).catch(
                    err => setError(err.message)
                )
        }
        setError("Passwords don't match")

    }
    return (
        <div className='form'>
            <form onSubmit={onRegisterSubmitHandler}>
                <h1>Register</h1>

                <label htmlFor="username">Username</label>
                <input type="text" name='username'></input>

                <label htmlFor="password">Password</label>
                <input type="password" name='password'></input>

                <label htmlFor="rePassword">Repeat Password</label>
                <input type="password" name='rePassword'></input>
                <p>
                    <input className='button' type="submit" value='Register'></input>
                </p>

            </form>
            <h2>{error}</h2>
        </div>
    )
}
export default Register;
import firebase from '../utils/firebase'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Register.css'

function Login() {
    let history = useHistory()
    const [error, setError] = useState(null)

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value
        const password = e.target.password.value


        firebase.auth().signInWithEmailAndPassword(username, password)
            .then((userCredential) => {
                console.log(userCredential);
                history.push('/')
            }).catch(
                err => setError(err.message)
            )
    }

    return (
        <div className='form'>

            <form onSubmit={onLoginSubmitHandler}>
                <h1>Login</h1>

                <label htmlFor="username">Username</label>
                <input type="text" name='username'></input>

                <label htmlFor="password">Password</label>
                <input type="password" name='password'></input>

                <p>
                    <input className='button' type="submit" value='Login'></input>
                </p>

            </form>
            <h2>{error}</h2>
            <h1><Link to='/register'>If you are new, Register here!</Link></h1>
        </div>
    )
}
export default Login;
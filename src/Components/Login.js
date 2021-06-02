import firebase from '../utils/firebase'

import './Register.css'

function Login() {

    const onLoginSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value
        const password = e.target.password.value


        firebase.auth().signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            console.log(userCredential);
        })

    }
    return(
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
        </div>
    )
}
export default Login;
import './Register.css'

function Login() {

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div className='form'>
            <form onSubmit={onRegisterSubmitHandler}>
                <h1>Login</h1>

                <label htmlFor="username">Username</label>
                <input type="text"></input>

                <label htmlFor="password">Password</label>
                <input type="password"></input>
                
                <p>
                <input className='button' type="submit" value='Login'></input>
                </p>

            </form>
        </div>
    )
}
export default Login;
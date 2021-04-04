import './Register.css'

function Register() {

    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();
    }
    return(
        <div className='form'>
            <form onSubmit={onRegisterSubmitHandler}>
                <h1>Register</h1>

                <label htmlFor="username">Username</label>
                <input type="text"></input>

                <label htmlFor="password">Password</label>
                <input type="password"></input>

                <label htmlFor="rePassword">Repeat Password</label>
                <input type="password"></input>
                <p>
                <input className='button' type="submit" value='Register'></input>
                </p>

            </form>
        </div>
    )
}
export default Register;
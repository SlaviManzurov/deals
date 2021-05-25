import { Link } from "react-router-dom";
import "./Header.css"
function Header({username, isAuth}) {

    console.log(username);
    return (
        <nav>
            <div className="Header-right">
                <ul>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/create' className='link'>Create</Link>
                    <Link to='/login' className='link'>Login</Link>
                    <Link to='/register' className='link'>Register</Link>
                </ul>
            </div>
            <div className="Header-left">
                <ul>
                    {isAuth
                    ?(<li>Wellcome, {username}</li>)
                    :(<li>Wellcome, Guest</li>)
                    }
                    <Link to='/logout' className='link'>Logout</Link>
                </ul>
            </div>
        </nav>

    );
}

export default Header;
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useContext } from 'react'
import "./Header.css"


function Header() {

    const { username, isAuth } = useContext(AuthContext)

    return (
        <nav>
            <div className="Header-right">
                <ul>
                    <Link to='/' className='link'>Home</Link>
                    {isAuth
                        ? <Link to='/create' className='link'>Create</Link>
                        : <Link to='/register' className='link'>Register</Link>
                    }
                </ul>
            </div>
            <div className="Header-left">
                <ul>
                    {isAuth
                        ? <li>Wellcome, {username}</li>
                        : <li>Wellcome, Guest</li>
                    }
                    {isAuth
                        ? <Link to='/logout' className='link'>Logout</Link>
                        : <Link to='/login' className='link'>Login</Link>
                    }

                </ul>
            </div>
        </nav>

    );
}

export default Header;
import "./Header.css"
function Header() {
    return (
        <nav>
            <div className="Header-right">
                <ul>
                    <li>Home</li>
                    <li>add</li>
                    <li>login</li>
                    <li>register</li>
                </ul>
            </div>
            <div className="Header-left">
                <ul>
                    <li>Wellcome, Slavi</li>
                    <li>Logout</li>
                </ul>
            </div>
        </nav>

    );
}

export default Header;
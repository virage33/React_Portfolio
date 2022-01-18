import './Header.css';

function Header(){
    return (
        <nav className="nav_bar">
           
            <ul className="nav_list">
                <li className="nav_link"><a href='#Home'>Home</a></li>
                <li className="nav_link"><a href='#About'>About</a></li>
                <li className="nav_link"><a href='#Project'>Project</a></li>
                <li className="nav_link"><a href='#Skills'>Skills</a></li>
               
            </ul>
            <div className="nav_btn"> <a href='#Contact'>GET IN TOUCH </a></div>
        </nav>
    );
}
export default Header;
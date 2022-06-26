import React from "react";
import "./Header.scss";
import {NavLink} from "react-router-dom";


function Header() {
    return(
        <header className={`Header`}>
            <nav className={`nav`}>
                <div className="nav-brand"><NavLink to={"/"} exact="true">Evil Code</NavLink></div>
                <ul>
                    <li className={`nav-item`}><NavLink to={"/"} exact="true">Home</NavLink></li>
                    <li className={`nav-item`}><NavLink to={"/1"} exact="true">item 1</NavLink></li>
                    <li className={`nav-item`}><NavLink to={"/2"} exact="true">item 2</NavLink></li>
                    <li className={`nav-item`}><NavLink to={"/3"} exact="true">item 3</NavLink></li>
                </ul>
                <div className="nav-auth"><NavLink to={"/auth"}>Auth</NavLink></div>
            </nav>
        </header>
    );
}


export default Header;
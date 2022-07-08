import React, {useState} from "react";
import "./Header.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmark, faCaretLeft} from "@fortawesome/free-solid-svg-icons";


function Header() {

    const [menu, setMenu] = useState(false);
    return(
        <header className={`Header ${menu ?' active ':''}`}>
            <nav className={`nav`}>
                <div className="nav-brand">
                    <NavLink to={"/"} exact="true">Evil Code</NavLink>
                    <div className="toggle_menu">
                        {!menu ? <FontAwesomeIcon
                            onClick={()=>{setMenu(!menu)}}
                            icon={faBars}/> : false}
                        {menu ? <FontAwesomeIcon
                            onClick={()=>{setMenu(!menu)}}
                            icon={faXmark}/> : false}
                    </div>
                </div>
                <ul>
                    <li className={`nav-item`}><NavLink to={"/"} exact="true">Home</NavLink></li>
                    <li className={`nav-item`}><NavLink to={"/1"} exact="true">item 1</NavLink></li>
                    <li className={`nav-item`}><NavLink to={"/2"} exact="true">item 2</NavLink></li>
                    <li className={`nav-item`}><div className={`dropdown`}>Cat 3
                        <FontAwesomeIcon className={`faCaretLeft`} icon={faCaretLeft}/>
                        <ul className={`dropdown-menu`}>
                            <li><a href="/">sub item 1</a></li>
                            <li><NavLink to={"/ternary_options"} exact="true">Архитектура*</NavLink></li>
                        </ul></div>
                    </li>
                </ul>
                <div className="nav-auth"><NavLink to={"/auth"}>Auth</NavLink></div>
            </nav>
        </header>
    );
}


export default Header;
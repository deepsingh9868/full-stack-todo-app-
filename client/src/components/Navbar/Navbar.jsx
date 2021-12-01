import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <>
            <div>
                <div className={click ? "main-container" : ""} onClick={() => Close()} />
                <nav className="navbar" onClick={(e) => e.stopPropagation()}>
                    <div className="nav-container">

                        <NavLink exact to="/" className="nav-logo">
                            <div className="logo">
                                <div className="circle">
                                    <div id="outer-circle">
                                    </div>
                                </div>
                                T<span className="O">O</span>D<span className="O">O</span>
                            </div>
                        </NavLink>

                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/about"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/todo"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Todo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/login"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/signup"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Signup
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar

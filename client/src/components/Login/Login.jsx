import { React, useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from "react-icons/fa";
import loginpic from "../../images/signin.jpg";
import { NavLink, useHistory } from 'react-router-dom';
import axios from "axios";
import "./Login.css";
import { Formik } from "formik";

const Login = () => {
    // const [Email, setEmail] = useState('');
    // const [Password, setPassword] = useState('');
    const history = useHistory();
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleinputs = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value })
    }


    const LoginUser = async (e) => {
        e.preventDefault();
        // const { email, password } = user;
        // const res = await fetch("http://localhost:5000/user/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({ email, password })
        // })
        // const data = res.json();
        // if (res.status === 400 || res.status === 422 || !data) {
        //     window.alert("Invalid credentials");
        // }
        axios.post("http://localhost:5000/user/login", user)
            .then((res) => {
                window.alert("Login successful")
                console.log(res);
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            })
        //     else {
        //         window.alert("Login Successfull");
        //         history.push("/");
        //     }
    }

    return (
        <>
            <section className="login">
                <div className="container">
                    <div className="login-content">
                        <div className="login-form">
                            <form className="register-form" id="register-form">
                                <h2 className="form-title">Login</h2>
                                <div className="form-group">
                                    <label className="label"> <FaEnvelope /> </label>
                                    <input className="input"
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        value={user.email}
                                        onChange={handleinputs}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label"><FaLock /></label>
                                    <input className="input"
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={user.password}
                                        onChange={handleinputs}

                                    />
                                </div>
                                <div className="form-button">
                                    <input className="form-submit"
                                        type="submit"
                                        value="Login"
                                        onClick={LoginUser}
                                    />
                                </div>
                            </form>
                            <div className="login-image">
                                <figure><img src={loginpic} alt="logo" /></figure>
                                <NavLink to="/signup" className="login-image-link">create an account</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login

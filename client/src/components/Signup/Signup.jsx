import { React, useState } from 'react';
import { FaUser, FaEnvelope, FaLock, } from "react-icons/fa";
import signpic from "../../images/signup1.jpg";
import { NavLink, useHistory } from 'react-router-dom';
import "./Signup.css";

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    let name, value;
    const handleinputs = (event) => {
        // console.log(event);
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    }

    const SendData = async (event) => {
        event.preventDefault();
        const { name, email, password, confirmpassword } = user;
        const res = await fetch("http://localhost:5000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, confirmpassword
            })
        })

        const data = await res.json()
        // console.log(data);
        if (res.status === 422 || !data) {
            window.alert("Plz fill all the fields")
            console.log("Invalid registeration")

        } else if (res.status === 400) {
            window.alert("Either email is already exits or password didn't match")
        }
        else {
            window.alert(" Registration Succesful")
            console.log("registeration Successful")
            history.push("/login")
        }

    }


    return (
        <>
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <form method="POST" className="register-form" id="register-form">
                                <h2 className="form-title">Sign up</h2>
                                <div className="form-group">
                                    <label className="label"> <FaUser /> </label>
                                    <input className="input"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your name"
                                        value={user.name}
                                        onChange={handleinputs}

                                    />
                                </div>
                                <div className="form-group">
                                    <label className="label"><FaEnvelope /></label>
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
                                <div className="form-group">
                                    <label className="label"><FaLock /></label>
                                    <input className="input"
                                        type="password"
                                        name="confirmpassword"
                                        id="confirmpassword"
                                        placeholder="Confirm Password"
                                        value={user.confirmpassword}
                                        onChange={handleinputs}

                                    />
                                </div>
                                <div className="form-button">
                                    <input className="form-submit"
                                        type="submit"
                                        value="Register"
                                        onClick={SendData}

                                    />
                                </div>
                            </form>
                            <div className="signup-image">
                                <figure><img src={signpic} alt="logo" /></figure>
                                <NavLink to="/login" className="signup-image-link">I am already member</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup

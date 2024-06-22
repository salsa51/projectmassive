// SignIn.js

import React, { useState } from "react";
import { MdFacebook } from "react-icons/md";
import '../styles/signin.css';
import { Link, useNavigate } from "react-router-dom";
import { login } from "./api"; // Import the login function from api.js

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await login(username, password);
            if (response.success) {
                alert('Login successful'); // Display success message
                // Redirect to dashboard or other page upon successful login
                navigate('/LandingPage')
            } else {
                alert('Login failed: ' + response.message); // Display failure message
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed: terjadi kesalahan'); // Display generic error message
        }
    };

    return (
        <div className="sign-in">
            <div className="div">
                <div className="overlap">
                    <img className="unsplash" alt="Unsplash" src="unsplash-4-jhdo54byg.png" />
                </div>
                <div className="overlap-group">
                    <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
                    <div className="text-wrapper">Digital Foods</div>
                </div>
                <form className="frame" onSubmit={handleSubmit}>
                    <div className="text-wrapper-2">Masuk Akun Digital Food</div>
                    <div className="frame-2">
                        <div className="frame-3">
                            <div className="frame-wrapper">
                                <div className="frame-4">
                                    <img className="img" alt="" src="Vector.png" />
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="frame-wrapper">
                                <div className="frame-4">
                                    <img className="img" alt="" src="Vector-a.png" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="frame-5">
                            <div className="frame-6">
                                <div className="text-wrapper-4">Keep me logged in</div>
                            </div>
                            <button className="text-wrapper-5">Forgot password</button>
                        </div>
                    </div>
                    <div className="frame-7">
                        <div className="frame-8">
                            <div className="text-wrapper-6">atau masuk dengan</div>
                        </div>
                        <div className="frame-9">
                            <div className="frame-10">
                                <img className="image" alt="Image" src="image-26.png" />
                                <button className="login-google">Login&nbsp;&nbsp;Google</button>
                            </div>
                            <div className="frame-10">
                                <MdFacebook className="img" alt="Image" color="#3B5998"/>
                                <button className="login-facebook">Login&nbsp;&nbsp;Facebook</button>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <button type="submit" className="text-wrapper-7">Masuk</button>
                        </div>
                    </div>
                    <div className="frame-11">
                        <div className="text-wrapper-4">Belum punya akun?</div>
                        <Link to="/SignUP" className="text-wrapper-8"> Daftar</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;

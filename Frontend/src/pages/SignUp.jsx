import React, { useState } from "react";
import { MdFacebook } from "react-icons/md";
import '../styles/signup.css';
import { Link, useNavigate } from "react-router-dom";
import { register } from './api.js';

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Kata sandi tidak cocok!");
            return;
        }
        
        try {
            const response = await register(username, email, password, address);
            if (response.success) {
                console.log("Berhasil daftar");
                navigate("/SignIn");
            } else {
                console.error('Registrasi gagal:', response.message);
                alert('Registrasi gagal: ' + response.message);
            }
        } catch (error) {
            console.error('Error registrasi:', error);
            alert('Registrasi gagal: terjadi kesalahan');
        }
    };

    return (
        <div className="sign-up-pengelolah">
            <div className="div">
                <div className="overlap">
                    <img className="unsplash" alt="Unsplash" src="unsplash-va1l1jrtm70.png" />
                    <img className="whatsapp-image" alt="Whatsapp image" src="whatsapp-image-2024-05-07-at-19-04-1.png" />
                    <div className="text-wrapper">Digital Foods</div>
                </div>
                <div className="overlap-group">
                    <form className="frame" onSubmit={handleSubmit}>
                        <div className="frame-2">
                            <p className="p">Selamat Datang di Digital Foods</p>
                        </div>
                        <br/>
                        <div className="frame-3">
                            <div className="text-wrapper-2">Daftar dengan menggunakan</div>
                            <br />
                        </div>

                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="text-wrapper-3">Username</div>
                                <div className="div-wrapper">
                                    <input 
                                        type="text"
                                        className="text-wrapper-4"
                                        placeholder="Masukkan username Anda"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="frame-7">
                                <div className="text-wrapper-3">Email*</div>
                                <div className="div-wrapper">
                                    <input 
                                        type="email"
                                        className="text-wrapper-4"
                                        placeholder="Masukkan Email Anda"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="frame-wrapper">
                                <div className="frame-8">
                                    <div className="frame-6">
                                        <div className="text-wrapper-5">Alamat Lengkap</div>
                                        <div className="frame-9">
                                            <input 
                                                type="text"
                                                className="text-wrapper-6"
                                                placeholder="Masukkan alamat lengkap"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="frame-7">
                                <div className="text-wrapper-3">Kata Sandi*</div>
                                <div className="frame-10">
                                    <input 
                                        type="password"
                                        className="text-wrapper-4"
                                        placeholder="Masukkan Kata Sandi"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="frame-7">
                                <div className="text-wrapper-3">Konfirmasi Kata Sandi*</div>
                                <div className="frame-10">
                                    <input 
                                        type="password"
                                        className="text-wrapper-4"
                                        placeholder="Konfirmasi Kata Sandi"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="frame-7">
                                <p className="dengan-mendaftar">
                                    <span className="span">
                                        Dengan mendaftar, Anda bertanggung jawab atas akun tersebut sesuai dengan Syarat, Ketentuan &amp;
                                        Kebijakan Privasi.
                                    </span>
                                </p>
                            </div>

                            <div className="frame-11">
                                <button type="submit" className="text-wrapper-7">Daftar</button>
                            </div>

                            <div className="frame-7">
                                <p className="sudah-memiliki-akun">
                                    <span className="text-wrapper-8">Sudah memiliki akun? </span>
                                    <Link to="/SignIn" className="text-wrapper-9"> Masuk Sekarang</Link>
                                </p>
                            </div>
                        </div>
                    </form>

                    <div className="frame-12">
                        <img className="image" alt="Image" src="image-26.png" />
                        <button className="login-google-2">Login&nbsp;&nbsp;Google</button>
                    </div>

                    <div className="frame-13">
                        <MdFacebook className="image" alt="Image" color="#3B5998"/>
                        <button className="login-facebook-2">Login&nbsp;&nbsp;Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

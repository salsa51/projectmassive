// api.js

import axios from 'axios';


const backendUrl = 'http://localhost:3000'; // Ganti dengan alamat dan port backend Anda

// Fungsi untuk login

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${backendUrl}/login`, { username, password });
        return response.data; // Return the entire response data
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: error.response.data.message };
    }
};

// Fungsi untuk registrasi
const register = async (username, email, password, address) => {
    try {
        const response = await axios.post(`${backendUrl}/register`, { username, email, password, address });
        return { success: true, message: response.data.message };
    } catch (error) {
        return { success: false, message: error.response.data.message };
    }
};


export { register };

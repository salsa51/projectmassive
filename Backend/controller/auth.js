import { query } from "../database/Db.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

const getUser = async () => {
    const command = 'SELECT * FROM user'; // Select all users
    const result = await query(command);
    return result;
};



async function login (username, password) {
    try {
        // Validate input
        if (!username || !password) {
            throw new Error('username and password are required');
        }

        const users = await getUser();

        // Fetch user from database
        const user = users.find(user => user.username === username);

        // Check if user exists and password matches
        if (user && await bcrypt.compare(password, user.password)) {
            return { success: true, message: 'Login successful' };
        } else {
            throw new Error('Invalid username or password');
        }
    } catch (error) {
        // Handle errors
        console.error('Login error:', error);
        return { success: false, message: 'Login failed' };
    }
}
async function register(username, email, password, address) {
    try {
        // Validasi input
        if (!username || !password || !email || !address) {
            return { success: false, message: 'Username, password, email, dan alamat diperlukan' };
        }

        // Hash password menggunakan bcrypt
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Periksa apakah username sudah digunakan
        const existingUser = await query('SELECT * FROM user WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return { success: false, message: 'Username sudah digunakan' };
        }

        // Tambahkan user baru ke database
        const insertQuery = 'INSERT INTO user (username, password, email, address) VALUES (?, ?, ?, ?)';
        await query(insertQuery, [username, hashedPassword, email, address]);

        // Respon sukses
        return { success: true, message: 'Registrasi berhasil' };
    } catch (error) {
        // Tangani error
        console.error('Error registrasi:', error);
        return { success: false, message: 'Registrasi gagal' };
    }
}

export {login, register, getUser};
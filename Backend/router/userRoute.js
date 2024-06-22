import express from "express";
import { register, login, getUser } from "../controller/auth.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await login(username, password);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(401).json(result);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});




// Register endpoint
router.post('/register', async (req, res) => {
    const { username, email, password, address } = req.body;
    try {
        const result = await register(username, email, password, address);
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


router.get('/user', async (req, res) => {
    try {
        const user = await getUser();
        res.json(user);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


export default router;
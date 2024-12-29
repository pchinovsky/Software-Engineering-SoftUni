import { Router } from 'express';
import castService from '../services/castService.js';
import movieService from '../services/movieService.js';
import userService from '../services/userService.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const router = Router();
const secret = '0000';


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // if (!isValid) {
    //     return res.render('auth/login', { error: { message: 'Invalid password' } });
    // }
    const token = await userService.authenticateUser(email, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

router.post('/register', async (req, res) => {
    const { email, password, confirmPassword } = req.body;

    await userService.createUser({ email, password, confirmPassword });

    const token = await userService.authenticateUser(email, password);

    res.cookie('auth', token, { httpOnly: true });

    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default router;
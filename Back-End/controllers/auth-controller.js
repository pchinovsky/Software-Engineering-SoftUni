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

    const user = userService.getUserByUsername(email);

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        return res.render('auth/login', { error: { message: 'Invalid password' } });
    }

    const payload = { email, password: hash };
    const token = jwt.sign(payload, secret);
    res.cookie('auth', token);

    res.redirect('/');
});

router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const payload = { email, password: hash };

    const user = await userService.createUser({ email, password: hash });

    const token = jwt.sign(payload, secret);
    res.cookie('auth', token);

    res.redirect('/');
});

router.get('/logout', (req, res) => {
});

export default router;
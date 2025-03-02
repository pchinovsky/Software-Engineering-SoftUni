import { Router } from 'express';
import authService from '../services/authService.js';
import requireGuest from '../middleware/requireGuest.js';
import requireAuth from '../middleware/requireAuth.js';
import { extractErrorMsg } from '../utils/extractErrorMsg.js';

const router = Router();

router.get('/login', requireGuest, (req, res) => {
    const error = req.query.error ? req.query.error : undefined;
    res.render('auth/login', { title: 'Login Page', error });
});

router.get('/register', requireGuest, (req, res) => {
    res.render('auth/register', { title: 'Register Page' });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await authService.authenticateUser(email, password);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        const error = extractErrorMsg(err);
        res.render('auth/login', { email, error, title: 'Login Page' });
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        await authService.createUser({ username, email, password, confirmPassword });
        const token = await authService.authenticateUser(email, password);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
    } catch (err) {
        const error = extractErrorMsg(err);
        res.render('auth/register', { auth: { username, email }, error, title: 'Register Page' });
    }
});

router.get('/logout', requireAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

export default router;
import {Router} from 'express';
import Authentication from '../controllers/auth/auth';

const router = Router();


router.post('/login', Authentication.login);
router.post('/signup', Authentication.signup);

export default router;

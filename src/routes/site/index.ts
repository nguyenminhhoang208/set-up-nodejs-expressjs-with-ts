import express from 'express';
import siteController from '../../controllers/site.controller';
const router: express.Router = express.Router();

router.post('/api/v1/register', siteController.register);
router.get('/', siteController.home);

export default router;

import express from 'express';
import siteController from '../../controllers/site.controller';
const router: express.Router = express.Router();

router.get('/', siteController.home);

export default router;

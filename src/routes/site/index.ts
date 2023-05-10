import express, { Router } from 'express';
import siteController from '../../controllers/site.controller';
const router: Router = express.Router();

router.get('/', siteController.home);

export default router;

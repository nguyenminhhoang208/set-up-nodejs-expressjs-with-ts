import express from 'express';
import usersController from '../../controllers/users.controller';
const router: express.Router = express.Router();

// [GET] /users
router.get('/', usersController.getAllUser);

export default router;

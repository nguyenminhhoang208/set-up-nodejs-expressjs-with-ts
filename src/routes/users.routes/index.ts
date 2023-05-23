import express from 'express';
import usersController from '../../controllers/users.controller';
import { asyncHandler } from '../../helpers';
const router: express.Router = express.Router();

// [POST] /users/:id
router.post('/:id', asyncHandler(usersController.updateUser));
// [GET] /users
router.get('/', asyncHandler(usersController.getAllUser));

export default router;

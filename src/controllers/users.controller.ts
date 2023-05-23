import express from 'express';
import { getAllUser, updateUser } from '../services/crud.services';
import { OK } from '../utils/response.utils/success.response';

class UsersController {
	// Get all users from db
	getAllUser = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		new OK(await getAllUser()).send(res);
	};

	// Update the user's data
	updateUser = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		const accessToken = 'hi';
		new OK(
			'Update Successfully!',
			await updateUser(Number(req.params.id), req.body, accessToken)
		).send(res);
	};
}

export default new UsersController();

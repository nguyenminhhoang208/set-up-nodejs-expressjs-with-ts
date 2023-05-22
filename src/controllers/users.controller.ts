import express from 'express';
import { getAllUser } from '../services/crud.services';

class UsersController {
	getAllUser = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		try {
			const response = await getAllUser();
			res.status(200).json(response);
		} catch (error) {
			res.status(500).json({
				statusCode: 500,
				message: 'Error!',
			});
		}
	};
}

export default new UsersController();

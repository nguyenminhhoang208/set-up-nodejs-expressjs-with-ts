import express from 'express';
import HomeService from '../services/site.services/home.service';
import { createUser } from '../services/crud.services';

class Site {
	home = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		try {
			const data: object = await HomeService.home();
			return res.status(200).render('homepage.ejs', {
				data: JSON.stringify(data),
			});
		} catch (error) {
			return res.status(500).json(error);
		}
	};
	register = async (
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		const response = await createUser(req.body);
		res.status(201).json(response);
	};
}

export default new Site();

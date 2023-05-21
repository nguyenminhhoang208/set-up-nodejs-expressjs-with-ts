import express from 'express';
import HomeService from '../services/home.service';

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
}

export default new Site();

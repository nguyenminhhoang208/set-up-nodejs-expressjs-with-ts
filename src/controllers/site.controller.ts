import express from 'express';

class Site {
	home(
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) {
		return res.status(200).render('homepage.ejs');
	}
}

export default new Site();

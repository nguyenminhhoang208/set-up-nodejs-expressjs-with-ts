import { NextFunction, Request, Response } from 'express';

class Site {
	home(req: Request, res: Response, next: NextFunction) {
		return res.status(200).render('homepage.ejs');
	}
}

export default new Site();

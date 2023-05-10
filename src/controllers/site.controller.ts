import { NextFunction, Request, Response } from 'express';

class Site {
	home(req: Request, res: Response, next: NextFunction) {
		return res.status(200).json('hello world!!');
	}
}

export default new Site();

import { Express } from 'express';
import siteRoutes from './site/index';

const routes = (app: Express): void => {
	// [USE] /
	app.use('/', siteRoutes);
};

export default routes;

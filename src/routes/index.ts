import express from 'express';
import siteRoutes from './site/index';

const routes = (app: express.Application): void => {
	// [USE] /
	app.use('/', siteRoutes);
};

export default routes;

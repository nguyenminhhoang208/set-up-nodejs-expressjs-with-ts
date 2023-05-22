import express from 'express';
import siteRoutes from './site.routes';
import usersRoutes from './users.routes';

const routes = (app: express.Application): void => {
	// [USE] /users
	app.use('/users', usersRoutes);
	// [USE] /
	app.use('/', siteRoutes);
};

export default routes;

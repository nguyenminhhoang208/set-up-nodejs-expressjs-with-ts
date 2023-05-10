import express, { Express } from 'express';

import routes from './routes';
import appConfig from './configs/app.config';

// app
const app: Express = express();

// config
appConfig(app, express);

// Router
routes(app);

module.exports = app;

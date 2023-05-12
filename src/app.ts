import express from 'express';
import routes from './routes';
import appConfig from './configs/app.config';
import connectDB from './dbs/connectDB';

// app
const app: express.Application = express();

// connect database
connectDB();

// config
appConfig(app);

// Router
routes(app);

module.exports = app;

import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

const appConfig = (app: any, express: any) => {
	// config
	dotenv.config();

	app.use(morgan('dev')); // log request
	app.use(compression()); // giảm kích thước giữ liệu gửi đi
	app.use(helmet()); // bảo vệ thông tin

	// parse application/x-www-form-urlencoded
	app.use(express.urlencoded({ extended: true }));

	// parse application/json
	app.use(express.json());
};

export default appConfig;

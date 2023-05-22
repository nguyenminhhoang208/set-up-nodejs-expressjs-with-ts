import db from '../../models';
import { hashPassword } from '../auth.services';

type Tdata = {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	address: string;
	gender: boolean;
	image: string;
	roleId: string;
	positionId: string;
	phonenumber: string;
};

const createUser = async (data: Tdata) => {
	if (!data) {
		return {
			statusCode: 500,
			message: 'Error!',
		};
	}

	// hash password
	const { password, ...orther } = data;
	const hashPw = await hashPassword(password);
	if (!hashPw) {
		return {
			statusCode: 500,
			message: 'Error!',
		};
	}

	// create new user
	const newData = { password: hashPw, ...orther };
	await db.User.create(newData);
	return {
		statusCode: 201,
		message: 'Created!',
	};
};
export default createUser;

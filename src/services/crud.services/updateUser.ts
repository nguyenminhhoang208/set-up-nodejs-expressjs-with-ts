import db from '../../models';
import { Tuser } from '../../models/user';
import {
	BAD_REQUEST,
	FORBIDDEN,
	NOTFOUND,
	UNAUTHORIZED,
} from '../../utils/response.utils/error.response';
import { comparePassword, hashPassword } from '../auth.services';
import findUserById from '../../helpers/findUser/findUserById';

const updateUser = async (
	id: number,
	data: Tuser,
	accessToken: string
): Promise<any> => {
	// Handle Authentication
	if (!accessToken) {
		throw new UNAUTHORIZED();
	}

	// Handle Authorization
	if (false) {
		throw new FORBIDDEN();
	}

	// Handle data from client
	if (!id) {
		throw new BAD_REQUEST('No id for update!');
	}
	if (!data) {
		throw new BAD_REQUEST('No data for update!');
	}

	// Check user
	const user: Promise<Tuser> | any = await findUserById(id);
	if (!user) {
		throw new NOTFOUND('ID does not exist!');
	}

	// Check password change
	let newPw: any;
	if (!(await comparePassword(data.password, user.password))) {
		newPw = await hashPassword(data.password);
	}

	// Update new data for user
	await user.update({
		...data,
		password: newPw ? newPw : user.password,
	});

	// Save new data of user to DB
	const newUser = await user.save();
	if (!newUser) {
		throw new BAD_REQUEST();
	}
	return newUser;
};
export default updateUser;

import db from '../../models';

const getAllUser = async (): Promise<any> => {
	const allUser = await db.User.findAll();
	return allUser;
};
export default getAllUser;

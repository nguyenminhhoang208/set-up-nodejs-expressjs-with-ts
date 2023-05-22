import db from '../../models';

const getAllUser = async (): Promise<any> => {
	try {
		const allUser = await db.User.findAll();
		return {
			statusCode: 200,
			message: 'Successfully!',
			metadata: allUser,
		};
	} catch (error) {
		return {
			statusCode: 500,
			message: error,
		};
	}
};
export default getAllUser;

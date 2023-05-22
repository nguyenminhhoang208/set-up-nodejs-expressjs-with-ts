const bcrypt = require('bcrypt');
const comparePassword = async (
	password: any,
	passwordUser: any
): Promise<boolean> => {
	return await bcrypt.compare(password, passwordUser);
};

export default comparePassword;

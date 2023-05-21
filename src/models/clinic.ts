import { Sequelize, Model } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: any): object => {
	class Clinic extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models: any) {
			// define association here
		}
	}
	Clinic.init(
		{
			name: DataTypes.STRING,
			address: DataTypes.STRING,
			description: DataTypes.TEXT,
			image: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Clinic',
		}
	);
	return Clinic;
};

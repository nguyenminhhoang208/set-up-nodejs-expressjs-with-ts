"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        andress: DataTypes.STRING,
        gender: DataTypes.BOOLEAN,
        image: DataTypes.STRING,
        roleId: DataTypes.STRING,
        positionId: DataTypes.STRING,
        phonenumber: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};

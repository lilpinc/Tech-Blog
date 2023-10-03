const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }

    },
    {
        hooks: {
            // add hooks to bcrypt the password
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    })

module.exports = User;
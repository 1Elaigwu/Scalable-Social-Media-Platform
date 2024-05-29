const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:pass@localhost:5432/mydb');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});

const Profile = sequelize.define('Profile', {
    profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    bio: {
        type: DataTypes.TEXT,
    },
    profile_picture: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});

module.exports = { User, Profile };

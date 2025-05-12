const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// TODO: city, phone
const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    passwordHash: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM("customer", "specialist", "admin"), defaultValue: "customer" },
                              cityId: { type: DataTypes.INTEGER, allowNull: true },
}, {
    tableName: "users",
    timestamps: true,
});

module.exports = User;

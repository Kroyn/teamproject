const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Favorite = sequelize.define("Favorite", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    serviceId: { type: DataTypes.INTEGER, allowNull: false },
}, {
    tableName: "favorites",
    timestamps: true,
});

module.exports = Favorite;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const UserFile = sequelize.define("UserFile", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    fileUrl: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
}, {
    tableName: "user_files",
    timestamps: true,
});

module.exports = UserFile;

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Service = sequelize.define("Service", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
                                 rating: { type: DataTypes.FLOAT, defaultValue: 0 },
                                 specialistId: { type: DataTypes.INTEGER, allowNull: false },
                                 categoryId: { type: DataTypes.INTEGER, allowNull: false },
                                 cityId: { type: DataTypes.INTEGER },
}, {
    tableName: "services",
    timestamps: true,
});

module.exports = Service;

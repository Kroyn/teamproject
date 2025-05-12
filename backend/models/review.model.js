const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Review = sequelize.define("Review", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    bookingId: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
    comment: { type: DataTypes.TEXT },
}, {
    tableName: "reviews",
    timestamps: true,
});

module.exports = Review;

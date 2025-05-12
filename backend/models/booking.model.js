const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define("Booking", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    serviceId: { type: DataTypes.INTEGER, allowNull: false },
    customerId: { type: DataTypes.INTEGER, allowNull: false },
    date: { type: DataTypes.DATE, allowNull: false },
    status: {
        type: DataTypes.ENUM("pending", "confirmed", "completed", "cancelled"),
                                 defaultValue: "pending",
    },
}, {
    tableName: "bookings",
    timestamps: true,
});

module.exports = Booking;

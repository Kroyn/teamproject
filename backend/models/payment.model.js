const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Payment = sequelize.define("Payment", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    bookingId: { type: DataTypes.INTEGER, allowNull: false },
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
                                 status: {
                                     type: DataTypes.ENUM("unpaid", "paid", "refunded"),
                                 defaultValue: "unpaid",
                                 },
                                 paymentDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
    tableName: "payments",
    timestamps: true,
});

module.exports = Payment;

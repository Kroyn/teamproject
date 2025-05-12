const sequelize = require("../config/database");

const User = require("./user.model");
const Category = require("./category.model");
const Service = require("./service.model");
const Booking = require("./booking.model");
const Review = require("./review.model");
const Payment = require("./payment.model");
const Favorite = require("./favorite.model");
const Notification = require("./notification.model");
const City = require("./city.model");
const UserFile = require("./userFile.model");
const AuditLog = require("./auditLog.model");

// User — Service (1:M)
User.hasMany(Service, { foreignKey: "specialistId" });
Service.belongsTo(User, { foreignKey: "specialistId", as: "specialist" });

// Category — Service (1:M)
Category.hasMany(Service, { foreignKey: "categoryId" });
Service.belongsTo(Category, { foreignKey: "categoryId" });

// City — User / Service (1:M)
City.hasMany(User, { foreignKey: "cityId" });
User.belongsTo(City, { foreignKey: "cityId" });

City.hasMany(Service, { foreignKey: "cityId" });
Service.belongsTo(City, { foreignKey: "cityId" });

// User — Booking (1:M) (як замовник)
User.hasMany(Booking, { foreignKey: "customerId" });
Booking.belongsTo(User, { foreignKey: "customerId", as: "customer" });

// Service — Booking (1:M)
Service.hasMany(Booking, { foreignKey: "serviceId" });
Booking.belongsTo(Service, { foreignKey: "serviceId" });

// Booking — Review (1:1)
Booking.hasOne(Review, { foreignKey: "bookingId" });
Review.belongsTo(Booking, { foreignKey: "bookingId" });

// Booking — Payment (1:1)
Booking.hasOne(Payment, { foreignKey: "bookingId" });
Payment.belongsTo(Booking, { foreignKey: "bookingId" });

// User — Favorite (1:M)
User.hasMany(Favorite, { foreignKey: "userId" });
Favorite.belongsTo(User, { foreignKey: "userId" });

// Service — Favorite (1:M)
Service.hasMany(Favorite, { foreignKey: "serviceId" });
Favorite.belongsTo(Service, { foreignKey: "serviceId" });

// User — Notification (1:M)
User.hasMany(Notification, { foreignKey: "userId" });
Notification.belongsTo(User, { foreignKey: "userId" });

// User — UserFile (1:M)
User.hasMany(UserFile, { foreignKey: "userId" });
UserFile.belongsTo(User, { foreignKey: "userId" });

// User — AuditLog (1:M)
User.hasMany(AuditLog, { foreignKey: "userId" });
AuditLog.belongsTo(User, { foreignKey: "userId" });

module.exports = {
    sequelize,
    User,
    Category,
    Service,
    Booking,
    Review,
    Payment,
    Favorite,
    Notification,
    City,
    UserFile,
    AuditLog,
};

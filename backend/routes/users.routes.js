const express = require("express");
const router = express.Router();
const { User } = require("../models"); // підключення моделі
const bcrypt = require("bcrypt");

// GET для перевірки
router.get("/", (req, res) => {
    res.json({ message: "User API працює 🟢" });
});

// POST /register — реєстрація
router.post("/register", async (req, res) => {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ error: "Усі поля обов’язкові" });
    }

    try {
        const existing = await User.findOne({ where: { email } });
        if (existing) {
            return res.status(409).json({ error: "Користувач з таким email вже існує" });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await User.create({ fullName, email, passwordHash });
        res.status(201).json({ message: "Користувача створено", userId: user.id });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Помилка сервера" });
    }
});

module.exports = router;

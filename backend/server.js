const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db'); // Імпортуйте ваш пул з'єднань з db.js

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Маршрут для отримання всіх користувачів
app.get('/api/users', async (req, res) => {
    try {
        const result = await db.query('SELECT id, name, email, phone, role, city, created_at, updated_at FROM users');
        res.json(result.rows);
    } catch (error) {
        console.error('Помилка отримання користувачів з бази даних:', error);
        res.status(500).json({ error: 'Не вдалося отримати користувачів' });
    }
});

// Маршрут для отримання конкретного користувача за ID
app.get('/api/users/:id', async (req, res) => {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
        return res.status(400).json({ error: 'Невірний ID користувача' });
    }

    try {
        const result = await db.query('SELECT id, name, email, phone, role, city, created_at, updated_at FROM users WHERE id = $1', [userId]);

        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'Користувача не знайдено' });
        }
    } catch (error) {
        console.error('Помилка отримання користувача з бази даних:', error);
        res.status(500).json({ error: 'Не вдалося отримати користувача' });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});

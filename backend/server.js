const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Привіт від бекенду!' });
});

app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});

import axios from 'axios';

const API_URL = 'http://your-backend-api-url/orders'; // Заміни на свою URL

// Отримати всі замовлення користувача
export const getUserOrders = async (token) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data; // Повертаємо дані про замовлення
  } catch (error) {
    throw new Error('Помилка при отриманні замовлень');
  }
};

// Оформлення нового замовлення
export const createOrder = async (orderData, token) => {
  try {
    const response = await axios.post(API_URL, orderData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data; // Повертаємо дані замовлення
  } catch (error) {
    throw new Error('Помилка при створенні замовлення');
  }
};

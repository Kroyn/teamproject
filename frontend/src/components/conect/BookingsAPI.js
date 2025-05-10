import axios from 'axios';

export const bookTour = async (tourId, userId, additionalInfo = {}) => {
  try {
    const response = await axios.post('http://localhost:3000/api/bookings', {
      tourId,
      userId,
      ...additionalInfo
    });
    return response.data;
  } catch (error) {
    console.error('Помилка при бронюванні туру:', error);
    throw error;
  }
};

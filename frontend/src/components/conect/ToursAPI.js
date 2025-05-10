import axios from 'axios';

export const getTours = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/tours');
    return response.data;
  } catch (error) {
    console.error('Помилка при завантаженні турів:', error);
    throw error;
  }
};

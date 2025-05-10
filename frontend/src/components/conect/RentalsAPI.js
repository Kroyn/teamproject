import axios from 'axios';

// Функція для оренди спорядження
export const rentEquipment = async (equipmentId, userId, rentalPeriod) => {
  try {
    // Відправляємо POST запит на сервер для оренди спорядження
    const response = await axios.post('/api/rentals', {
      equipmentId, // Ідентифікатор спорядження
      userId,      // Ідентифікатор користувача
      rentalPeriod // Період оренди (в днях або інший формат)
    });

    // Повертаємо дані відповіді від сервера
    return response.data;
  } catch (error) {
    // Виводимо помилку в консоль, якщо сталася проблема при оренді
    console.error('Помилка при оренді спорядження:', error);
    throw error;
  }
};

const API_BASE = 'http://localhost:3000'; // або URL вашого сервера

// Отримання спорядження для оренди
export async function getRentalGear() {
  const response = await fetch(`${API_BASE}/rentalGear`);
  return await response.json();
}

// Отримання спорядження для продажу
export async function getSaleGear() {
  const response = await fetch(`${API_BASE}/saleGear`);
  return await response.json();
}

// ➕ Додавання бронювання спорядження
export async function addEquipmentBooking(item) {
  try {
    const response = await fetch(`${API_BASE}/equipmentBookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        equipmentId: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        date: new Date().toISOString() // Дата бронювання
      })
    });

    if (!response.ok) {
      throw new Error('Помилка при бронюванні спорядження');
    }

    return await response.json();
  } catch (error) {
    console.error('Помилка API при бронюванні:', error);
    throw error;
  }
}

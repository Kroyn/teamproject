<template>
  <div class="equipment">
    <h1>Туристичне спорядження</h1>

    <div class="section">
      <h2>Оренда спорядження</h2>
      <input
        type="text"
        v-model="rentalSearch"
        placeholder="Пошук орендованого спорядження..."
        class="search-input"
      />
      <div class="slider">
        <div class="item" v-for="item in filteredRentalGear" :key="item.id">
          <img :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <button @click="bookGear(item)">Орендувати</button>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>Покупка спорядження</h2>
      <input
        type="text"
        v-model="saleSearch"
        placeholder="Пошук для покупки..."
        class="search-input"
      />
      <div class="slider">
        <div class="item" v-for="item in filteredSaleGear" :key="item.id">
          <img :src="item.image" :alt="item.name" />
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <button @click="bookGear(item)">Придбати</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getRentalGear,
  getSaleGear,
  addEquipmentBooking
} from '@/components/conect/EquipmentAPI'; // Імпортуємо API функції

export default {
  name: "TourEquipment",
  data() {
    return {
      rentalSearch: "",
      saleSearch: "",
      rentalGear: [], // Список орендованого спорядження
      saleGear: []    // Список спорядження для продажу
    };
  },
  computed: {
    filteredRentalGear() {
      return this.rentalGear.filter(item =>
        item.name.toLowerCase().includes(this.rentalSearch.toLowerCase())
      );
    },
    filteredSaleGear() {
      return this.saleGear.filter(item =>
        item.name.toLowerCase().includes(this.saleSearch.toLowerCase())
      );
    }
  },
  methods: {
    async loadGear() {
      try {
        const rentalData = await getRentalGear(); // Завантаження орендованого спорядження
        const saleData = await getSaleGear();     // Завантаження спорядження для продажу
        this.rentalGear = rentalData;
        this.saleGear = saleData;
      } catch (error) {
        console.error("Не вдалося завантажити спорядження:", error);
      }
    },
    async bookGear(item) {
      try {
        await addEquipmentBooking(item);
        alert(`Бронювання спорядження "${item.name}" успішне!`);
      } catch (error) {
        alert("Сталася помилка при бронюванні. Спробуйте ще раз.");
        console.error("Помилка бронювання:", error);
      }
    }
  },
  async mounted() {
    await this.loadGear();
  }
};
</script>

<style scoped>
.equipment {
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.section {
  margin-bottom: 40px;
}

.search-input {
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 450px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.slider {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 10px 0;
}

.item {
  min-width: 300px;
  background: #f0f0f0;
  padding: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.item h3 {
  margin: 10px 0 5px;
}

.item p {
  font-size: 14px;
  color: #555;
}

.item button {
  margin-top: 10px;
  background: #28a745;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.item button:hover {
  background: #218838;
}
</style>

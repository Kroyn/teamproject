<template>
  <div class="home">
    <h1>Туристичні подорожі</h1>

    <div class="search-bar">
      <input type="text" placeholder="Пошук турів" v-model="searchQuery" />
    </div>

    <div class="tour-section">
      <h2>Подорожі Україною</h2>
      <div class="tour-slider">
        <div class="tour" v-for="tour in filteredUkrainianTours" :key="tour.id">
          <img :src="tour.image" :alt="tour.name" />
          <h3>{{ tour.name }}</h3>
          <p>{{ tour.description }}</p>
          <p><strong>Ціна:</strong> {{ tour.price }} грн</p>
          <button @click="selectTour(tour)">Переглянути</button>
        </div>
      </div>
    </div>

    <div class="tour-section">
      <h2>Подорожі світом</h2>
      <div class="tour-slider">
        <div class="tour" v-for="tour in filteredWorldTours" :key="tour.id">
          <img :src="tour.image" :alt="tour.name" />
          <h3>{{ tour.name }}</h3>
          <p>{{ tour.description }}</p>
          <p><strong>Ціна:</strong> {{ tour.price }} грн</p>
          <button @click="selectTour(tour)">Переглянути</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getTours } from '@/components/conect/ToursAPI';

export default {
  name: 'HomePage',
  data() {
    return {
      searchQuery: '',
      allTours: [],
    };
  },
  computed: {
    ukrainianTours() {
      return this.allTours.filter(tour => tour.region === 'Україна');
    },
    worldTours() {
      return this.allTours.filter(tour => tour.region !== 'Україна');
    },
    filteredUkrainianTours() {
      return this.ukrainianTours.filter(tour =>
        tour.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    filteredWorldTours() {
      return this.worldTours.filter(tour =>
        tour.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    selectTour(tour) {
      alert(`Ви вибрали тур: ${tour.name}`);
    }
  },
  async mounted() {
    try {
      this.allTours = await getTours();
    } catch (error) {
      console.error('Не вдалося завантажити тури:', error);
    }
  }
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.search-bar {
  margin-bottom: 20px;
}

.search-bar input {
  margin: 10px 0;
  padding: 8px;
  width: 100%;
  max-width: 450px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 14px;
}

.tour-section {
  margin-bottom: 40px;
}

.tour-slider {
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  gap: 20px;
}

.tour {
  min-width: 200px;
  flex-shrink: 0;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 12px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.tour img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
}

.tour h3 {
  margin: 10px 0 5px;
}

.tour p {
  font-size: 14px;
  color: #555;
}

.tour button {
  margin-top: 10px;
  background: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.tour button:hover {
  background: #0056b3;
}
</style>

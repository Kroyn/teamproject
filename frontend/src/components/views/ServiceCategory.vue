<template>
  <div class="category-page">
    <h2>{{ serviceData?.name || defaultTitle }}</h2>
    <p class="description">{{ serviceData?.description || defaultDescription }}</p>
    <p class="price" v-if="serviceData">Ціна: {{ serviceData.price }} грн</p>

    <h3>Наші працівники:</h3>
    <div class="specialists">
      <div
        class="specialist-card"
        v-for="worker in serviceData?.workers || defaultWorkers"
        :key="worker.id || worker.name"
      >
        <h3>{{ worker.name }}</h3>
        <p>Досвід: {{ worker.experience }} років</p>
        <p>Ціна за годину: {{ worker.hourlyRate }} грн</p>
        <button @click="contactWorker(worker.id)">Зв'язатися</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ServiceCategory',
  data() {
    return {
      serviceData: null,
      defaultTitle: 'Опис послуги',
      defaultDescription: 'Опис цієї послуги буде додано пізніше.',
      defaultWorkers: [
        {
          name: 'Олег Ковальчук',
          experience: 4,
          hourlyRate: 300
        },
        {
          name: 'Тетяна Сидоренко',
          experience: 7,
          hourlyRate: 350
        },
        {
          name: 'Віктор Лисенко',
          experience: 5,
          hourlyRate: 280
        }
      ]
    };
  },
  created() {
    const serviceName = this.$route.params.serviceName;
    this.fetchServiceData(serviceName);
  },
  methods: {
    async fetchServiceData(serviceName) {
      try {
        const response = await axios.get(`/api/services/${serviceName}`);
        this.serviceData = response.data;
      } catch (error) {
        console.error('Помилка при завантаженні:', error);
      }
    },
    contactWorker(workerId) {
      alert(`Зв'язатися з працівником ID: ${workerId || 'невідомий'}`);
    }
  }
};
</script>

<style scoped>
.category-page {
  max-width: 1000px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.description,
.price {
  font-size: 1.1rem;
  margin-bottom: 16px;
  color: #555;
}

.specialists {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.specialist-card {
  background: #f7f9fc;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.specialist-card button {
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.specialist-card button:hover {
  background-color: #1565c0;
}
</style>

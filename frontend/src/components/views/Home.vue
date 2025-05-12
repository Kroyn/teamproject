<template>
  <div class="home-container">
    <h2>Доступні послуги</h2>
    <div class="category-grid">
      <div class="category-box" v-for="(service, index) in services" :key="index">
        <img :src="`/image/Послуги/${service.image}`" alt="" class="category-image" />
        <div class="category-name">{{ service.name }}</div>
        <button class="select-button" @click="goToCategory(service.name)">Обрати</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      services: [
        { name: 'Домашній майстер', image: 'home_master.jpg' },
        { name: 'Ремонт техніки', image: 'tech_repair.jpg' },
        { name: 'Оздоблювальні роботи', image: 'finishing_work.jpg' },
        { name: 'Будівельні роботи', image: 'construction_work.jpg' },
        { name: 'Меблеві роботи', image: 'furniture_work.jpg' },
        { name: 'Клінінгові послуги', image: 'cleaning_services.jpg' },
        { name: 'Перевезення вантажів', image: 'cargo_transport.jpg' },
        { name: 'Догляд за дітьми', image: 'child_care.jpg' },
        { name: 'Ремонт авто', image: 'car_repair.jpg' },
        { name: 'Послуги репетиторів', image: 'tutoring_services.jpg' },
      ]
    };
  },
  methods: {
    goToCategory(name) {
      this.$router.push({ name: 'category', params: { categoryName: name } });
    }
  }
};
</script>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #f4f4f9;
}

h2 {
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 24px;
  color: #333;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px 20px; 
  justify-content: space-between;
}


.category-box {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
  width: 90%; 
  height: 300px;
  box-sizing: border-box;
}


.category-box:hover {
  transform: translateY(-4px);
}

.category-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 16px;
}

.select-button {
  padding: 10px 20px;
  font-size: 15px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.select-button:hover {
  background-color: #1565c0;
}

.category-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
}
</style>

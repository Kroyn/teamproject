<template>
  <div id="app">
    <header class="main-header">
      <div class="header-content">
        <div class="logo">
          <h1>Онлайн-сервіс замовлення послуг</h1>
          <p class="subtitle">Знайди перевіреного фахівця для будь-якого завдання</p>
        </div>
        <nav class="corner-buttons">
          <button class="nav-button" @click="goToHome">Головна</button>
          <button class="nav-button" @click="goToProfile">Особистий кабінет</button>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'MainApp',
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    goToCreateOrder() {
      this.$router.push({ name: 'create-order' }); // замінити на актуальний маршрут
    },
    goToProfile() {
      this.$router.push({ name: 'profile' });
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color: #f4f4f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-header {
  background: linear-gradient(90deg, #1e88e5, #42a5f5);
  color: white;
  padding: 40px 0;
  text-align: center;
}

.header-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 0;
  color: #e0f7fa;
}

.corner-buttons {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-button {
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background-color: #ff5722;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.nav-button:hover {
  background-color: #e64a19;
}
</style>

<template>
  <div id="app">
    <header style="background-image: url('/image/header-bg.jpg'); background-size: cover; background-position: center;">
      <div class="header-content">
        <div class="logo">
          <h1>Туристичний сайт</h1>
        </div>
        <nav class="corner-buttons">
          <button class="nav-button" @click="goToHome">Головна</button>
          <button class="nav-button" @click="goToEquipment">Спорядження</button>
          <button class="nav-button" @click="goToProfile">Особистий кабінет</button>
        </nav>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    },
    goToEquipment() {
      this.$router.push({ name: 'equipment' });
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

header {
  color: white;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-content {
  position: relative;
  width: 90%;
  max-width: 1000px;
  min-height: 200px;
}

.logo h1 {
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
}

.corner-buttons {
  position: absolute;
  bottom: 20px;
  right: -20px;
  display: flex;
  gap: 10px;
}

.nav-button {
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-button:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.nav-button:active {
  background-color: #003f7f;
  transform: scale(1);
}

.nav-button:focus {
  outline: none;
}

.nav-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .corner-buttons {
    flex-direction: column;
    left: 10px;
    bottom: 10px;
  }

  .nav-button {
    width: 100%;
  }
}
</style>
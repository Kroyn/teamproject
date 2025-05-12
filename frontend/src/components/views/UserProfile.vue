<template>
  <div class="profile-container">
    <h2>Особистий кабінет</h2>

    <div v-if="!isLoggedIn" class="auth-buttons">
      <button class="auth-button" @click="goToRegister">Реєстрація</button>
      <button class="auth-button" @click="goToLogin">Вхід</button>
    </div>

    <div v-else class="user-info">
      <p>Вітаємо, {{ user.firstName }} {{ user.lastName }}!</p>
      <p>Ваші замовлення:</p>
      <div v-if="orders.length > 0">
        <div v-for="(order, index) in orders" :key="index" class="order">
          <p><strong>Послуга:</strong> {{ order.serviceName }}</p>
          <p><strong>Дата замовлення:</strong> {{ order.orderDate }}</p>
          <p><strong>Статус:</strong> {{ order.status }}</p>
          <p><strong>Ціна:</strong> {{ order.price }} грн</p>
        </div>
      </div>
      <div v-else>
        <p>У вас немає замовлень.</p>
      </div>
      <button class="logout-button" @click="logOut">Вихід</button>
    </div>
  </div>
</template>

<script>
import { getUserProfile } from '@/components/conect/ProfileAPI';
import { getUserOrders } from '@/components/conect/OrdersAPI';
import { logoutUser } from '@/components/conect/LogoutAPI';

export default {
  data() {
    return {
      isLoggedIn: false,
      user: {
        firstName: '',
        lastName: ''
      },
      orders: []  // Додано масив для зберігання замовлень
    };
  },
  async mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const userData = await getUserProfile(token);
        this.user = userData;
        this.isLoggedIn = true;

        // Отримуємо замовлення користувача
        const userOrders = await getUserOrders(token);
        this.orders = userOrders;
      } catch (error) {
        console.error('Помилка авторизації або отримання замовлень:', error);
        localStorage.removeItem('token');
        this.isLoggedIn = false;
      }
    }
  },
  methods: {
    goToRegister() {
      this.$router.push({ name: 'register' });
    },
    goToLogin() {
      this.$router.push({ name: 'login' });
    },
    async logOut() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          await logoutUser(token);
        } catch (error) {
          console.error('Помилка при виході:', error);
        }
        localStorage.removeItem('token');
        this.isLoggedIn = false;
        this.$router.push({ name: 'home' });
      }
    }
  }
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.auth-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.auth-button {
  background-color: #007bff;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.auth-button:hover {
  background-color: #0056b3;
}

.logout-button {
  margin-top: 30px;
  background-color: #ff4d4f;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: #c9302c;
}

.order {
  margin: 20px 0;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>

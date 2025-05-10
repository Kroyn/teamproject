<template>
  <div class="login-container">
    <h2>Вхід</h2>
    <form @submit.prevent="submitForm">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Увійти</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { loginUser } from '@/components/conect/LoginAPI';

export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const data = await loginUser(this.email, this.password);

        // Зберігаємо токен
        localStorage.setItem('token', data.token);

        // Зберігаємо користувача (для бронювання)
        localStorage.setItem('user', JSON.stringify(data.user));

        this.$router.push({ name: 'profile' });
      } catch (err) {
        this.errorMessage = 'Невірний email або пароль.';
      }
    }
  }
};
</script>

<style>
.login-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
}

.login-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.login-container button {
  width: 100%;
  padding: 10px;
  background: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  box-sizing: border-box;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>

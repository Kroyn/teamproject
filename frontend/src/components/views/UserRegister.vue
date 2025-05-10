<template>
  <div class="register-container">
    <h2>Реєстрація</h2>
    <form @submit.prevent="submitForm">
      <input v-model="form.firstName" placeholder="Ім'я" required />
      <input v-model="form.lastName" placeholder="Прізвище" required />
      <input v-model="form.patronymic" placeholder="По батькові" required />
      <input v-model="form.phone" placeholder="Номер телефону" required />
      <input v-model="form.email" type="email" placeholder="Email" required />
      <input v-model="form.password" type="password" placeholder="Пароль" required />
      <button type="submit">Зареєструватися</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { registerUser } from '@/components/conect/RegisterAPI';

export default {
  name: 'UserRegister',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        patronymic: '',
        phone: '',
        email: '',
        password: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        await registerUser(this.form);
        alert('Реєстрація успішна!');
        this.$router.push({ name: 'login' });
      } catch (err) {
        this.errorMessage = 'Помилка реєстрації. Спробуйте ще раз.';
      }
    }
  }
};
</script>

<style>
.register-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
}

.register-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

.register-container input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.register-container button {
  width: 100%;
  padding: 10px;
  background: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
}

.error {
  color: red;
  text-align: center;
  margin-top: 10px;
}
</style>

import axios from 'axios';

export async function loginUser(email, password) {
  const response = await axios.post('http://localhost:3000/api/login', {
    email,
    password
  });
  return response.data;
}

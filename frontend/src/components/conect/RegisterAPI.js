import axios from 'axios';

export async function registerUser(form) {
  const response = await axios.post('http://localhost:3000/api/register', form);
  return response.data;
}
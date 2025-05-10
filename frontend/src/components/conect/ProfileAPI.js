import axios from 'axios';

export async function getUserProfile(token) {
  const response = await axios.get('http://localhost:3000/api/profile', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

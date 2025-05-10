import axios from 'axios';

export async function logoutUser(token) {
  const response = await axios.post(
    'http://localhost:3000/api/logout',
    {}, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  return response.data;
}

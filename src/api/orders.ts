import axios from 'axios';

export const fetchOrdersByUserId = async (userId: string) => {
  try {
    const response = await axios.get(`/api/orders?userId=${userId}`);
    return response.data.orders; // Assuming the API returns { orders: [...] }
  } catch (error) {
    console.error('Error fetching orders:', error);
    return [];
  }
};

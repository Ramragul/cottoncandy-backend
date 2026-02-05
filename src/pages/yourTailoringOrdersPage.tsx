import { useAuth } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const YourTailoringOrdersPage = () => {
  const { authState } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'active'|'history'>('active');

  useEffect(() => {
    fetchOrders();
  }, [activeTab]);

  const fetchOrders = async () => {
    const url = activeTab === 'active'
      ? `/api/cc/tailoring/orders/active/${authState.userId}`
      : `/api/cc/tailoring/orders/history/${authState.userId}`;

    const res = await axios.get(url);
    setOrders(res.data.data);
  };

  return (
    <div className="orders-page">
      <h2>My Tailoring Orders</h2>

      <div className="tabs">
        <button onClick={()=>setActiveTab('active')}>Active Orders</button>
        <button onClick={()=>setActiveTab('history')}>Order History</button>
      </div>

      <div className="orders-grid">
        {orders.map(order => (
          <div className="order-card" key={order.order_id}>
            <img src={order.product_image_url} alt="" />

            <div className="details">
              <h3>Order #{order.order_id}</h3>
              <p>Stitch: {order.stitch_option}</p>
              <p>City: {order.city}</p>
              <p>Appt: {new Date(order.appointment_date).toLocaleDateString()}</p>

              <div 
                className="status-badge"
                style={{ background: getStatusColor(order.order_status) }}
              >
                {order.order_status}
              </div>

              <div className="price">
                ₹ {order.total_amount}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourTailoringOrdersPage;

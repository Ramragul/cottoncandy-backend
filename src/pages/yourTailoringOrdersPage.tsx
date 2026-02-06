import { useAuth } from '../contexts/AuthContext';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { getStatusColor } from '../utils/orderStatus';
import '../css/YourTailoringOrdersPage'
import OrderDetailDrawer from './OrderDetailDrawer';

type Order = {
  order_id: number;
  order_date: string;
  stitch_option: string;
  city: string;
  total_amount: number;
  order_status: string;
  product_image_url: string;
  product_id?: string;
  order_notes?: string;
};

const API_BASE = 'https://admee.in:3003';

export const YourTailoringOrdersPage = () => {
  const { authState } = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);


  useEffect(() => {
    if (!authState?.userId) return;
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, authState?.userId]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const url =
        activeTab === 'active'
          ? `${API_BASE}/api/cc/tailoring/orders/active/${authState.userId}`
          : `${API_BASE}/api/cc/tailoring/orders/history/${authState.userId}`;

      const res = await axios.get(url);
      setOrders(res.data?.data || []);
    } catch (err) {
      console.error('Failed to fetch orders', err);
    } finally {
      setLoading(false);
    }
  };

  // 🔍 Global smart search
  const filteredOrders = useMemo(() => {
    if (!search.trim()) return orders;

    const q = search.toLowerCase();

    return orders.filter((o) => {
      const blob = `
        ${o.order_id}
        ${o.city}
        ${o.stitch_option}
        ${o.order_status}
        ${o.product_id}
        ${o.order_notes}
      `.toLowerCase();

      return blob.includes(q);
    });
  }, [orders, search]);

  return (
    <div className="orders-page">

      {/* HEADER */}
      <div className="orders-header">
        <h1>My Tailoring Orders</h1>

        <div className="orders-nav">
          <button
            className={activeTab === 'active' ? 'active' : ''}
            onClick={() => setActiveTab('active')}
          >
            Active Orders
          </button>

          <button
            className={activeTab === 'history' ? 'active' : ''}
            onClick={() => setActiveTab('history')}
          >
            Order History
          </button>
        </div>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by order ID, stitch type, city…"
        />
      </div>

      {/* CONTENT */}
      {loading ? (
        <div className="orders-loading">Loading orders…</div>
      ) : filteredOrders.length === 0 ? (
        <div className="orders-empty">
          No orders found
        </div>
      ) : (
        <div className="orders-list">
          {filteredOrders.map((order) => (
            <div className="order-row" key={order.order_id} onClick={() => setSelectedOrder(order)}>

              {/* tiny avatar */}
              <img
                src={order.product_image_url}
                alt="tailoring reference"
                className="order-avatar"
                onError={(e: any) => {
                  e.currentTarget.src = '/placeholder.png';
                }}
              />

              {/* main info */}
              <div className="order-main">
                <div className="order-title">
                  Order #{order.order_id}
                </div>
                <div className="order-sub">
                  {order.stitch_option} · {order.city} ·{' '}
                  {new Date(order.order_date).toLocaleDateString()}
                </div>
              </div>

              {/* price */}
              <div className="order-price">
                ₹{order.total_amount}
              </div>

              {/* status */}
              <div
                className="order-status"
                style={{ color: getStatusColor(order.order_status) }}
              >
                ● {order.order_status}
              </div>
            </div>
          ))}
        </div>
      )}

    {/* ✅ ORDER DETAIL DRAWER — ADD HERE */}
    {selectedOrder && (
      <OrderDetailDrawer
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    )}
    </div>
  );
};

export default YourTailoringOrdersPage;

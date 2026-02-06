import '../css/OrderDetailDrawer';
import { getStatusColor } from '../utils/orderStatus';

type Props = {
  order: any;
  onClose: () => void;
};

const STATUS_FLOW = [
  'Created',
  'Collected',
  'In Progress',
  'Ready',
  'Out for Delivery',
  'Completed'
];

export const OrderDetailDrawer = ({ order, onClose }: Props) => {
  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div
        className="drawer"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="drawer-header">
          <h2>Order #{order.order_id}</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {/* STATUS */}
        <div className="drawer-section">
          <div
            className="drawer-status"
            style={{ color: getStatusColor(order.order_status) }}
          >
            ● {order.order_status}
          </div>

          <div className="status-timeline">
            {STATUS_FLOW.map((s) => (
              <div
                key={s}
                className={`timeline-step ${
                  STATUS_FLOW.indexOf(s) <=
                  STATUS_FLOW.indexOf(order.order_status)
                    ? 'done'
                    : ''
                }`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="drawer-section">
          <h4>Tailoring Detail</h4>
          <p><b>Stitch Option:</b> {order.stitch_option}</p>
          <p><b>City:</b> {order.city}</p>
          <p><b>Appointment:</b> {new Date(order.order_date).toLocaleDateString()}</p>
          <p><b>Notes:</b> {order.order_notes || '—'}</p>
        </div>

        {/* AMOUNT */}
        <div className="drawer-section">
          <h4>Payment</h4>
          <div className="amount-row">
            <span>Product Price</span>
            <span>₹{order.products_price}</span>
          </div>
          <div className="amount-row">
            <span>Security Deposit</span>
            <span>₹{order.security_deposit}</span>
          </div>
          <div className="amount-row total">
            <span>Total</span>
            <span>₹{order.total_amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailDrawer;

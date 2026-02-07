// Version 1 : Working Version 

// import '../css/OrderDetailDrawer.css';
// import { getStatusColor } from '../utils/orderStatus';

// type Props = {
//   order: any;
//   onClose: () => void;
// };

// const STATUS_FLOW = [
//   'Created',
//   'Collected',
//   'In Progress',
//   'Ready',
//   'Out for Delivery',
//   'Completed'
// ];

// export const OrderDetailDrawer = ({ order, onClose }: Props) => {
//   return (
//     <div className="drawer-backdrop" onClick={onClose}>
//       <div
//         className="drawer"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* HEADER */}
//         <div className="drawer-header">
//           <h2>Order #{order.order_id}</h2>
//           <button onClick={onClose}>✕</button>
//         </div>

//         {/* STATUS */}
//         <div className="drawer-section">
//           <div
//             className="drawer-status"
//             style={{ color: getStatusColor(order.order_status) }}
//           >
//             ● {order.order_status}
//           </div>

//           <div className="status-timeline">
//             {STATUS_FLOW.map((s) => (
//               <div
//                 key={s}
//                 className={`timeline-step ${
//                   STATUS_FLOW.indexOf(s) <=
//                   STATUS_FLOW.indexOf(order.order_status)
//                     ? 'done'
//                     : ''
//                 }`}
//               >
//                 {s}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* DETAILS */}
//         <div className="drawer-section">
//           <h4>Tailoring Detail</h4>
//           <p><b>Stitch Option:</b> {order.stitch_option}</p>
//           <p><b>City:</b> {order.city}</p>
//           <p><b>Appointment:</b> {new Date(order.order_date).toLocaleDateString()}</p>
//           <p><b>Notes:</b> {order.order_notes || '—'}</p>
//         </div>

//         {/* AMOUNT */}
//         <div className="drawer-section">
//           <h4>Payment</h4>
//           <div className="amount-row">
//             <span>Product Price</span>
//             <span>₹{order.products_price}</span>
//           </div>
//           <div className="amount-row">
//             <span>Security Deposit</span>
//             <span>₹{order.security_deposit}</span>
//           </div>
//           <div className="amount-row total">
//             <span>Total</span>
//             <span>₹{order.total_amount}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetailDrawer;


// Version 2 : working version

// import '../css/OrderDetailDrawer.css';
// import { getStatusColor } from '../utils/orderStatus';

// type Props = {
//   order: any;
//   onClose: () => void;
// };

// const STATUS_FLOW = [
//   'Created',
//   'Collected',
//   'In Progress',
//   'Ready',
//   'Out for Delivery',
//   'Completed'
// ];

// export const OrderDetailDrawer = ({ order, onClose }: Props) => {

//   // Convert values safely to number
//   const productPrice = Number(order.products_price || 0);
//   const securityDeposit = Number(order.security_deposit || 0);
//   const liningPrice = Number(order.lining_price || 0);
//   const speedPrice = Number(order.speed_price || 0);

//   const hasLining = Number(order.has_lining) === 1;
//   const isRapid =
//     order.stitching_speed &&
//     order.stitching_speed.toLowerCase() !== 'standard';

//   // Compute total dynamically (safer than trusting DB)
//   const computedTotal =
//     productPrice +
//     securityDeposit +
//     (hasLining ? liningPrice : 0) +
//     (isRapid ? speedPrice : 0);

//   return (
//     <div className="drawer-backdrop" onClick={onClose}>
//       <div
//         className="drawer"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* HEADER */}
//         <div className="drawer-header">
//           <h2>Order #{order.order_id}</h2>
//           <button onClick={onClose}>✕</button>
//         </div>

//         {/* STATUS */}
//         <div className="drawer-section">
//           <div
//             className="drawer-status"
//             style={{ color: getStatusColor(order.order_status) }}
//           >
//             ● {order.order_status}
//           </div>

//           <div className="status-timeline">
//             {STATUS_FLOW.map((s) => (
//               <div
//                 key={s}
//                 className={`timeline-step ${
//                   STATUS_FLOW.indexOf(s) <=
//                   STATUS_FLOW.indexOf(order.order_status)
//                     ? 'done'
//                     : ''
//                 }`}
//               >
//                 {s}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* DETAILS */}
//         <div className="drawer-section">
//           <h4>Tailoring Detail</h4>
//           <p><b>Stitch Option:</b> {order.stitch_option}</p>
//           <p><b>City:</b> {order.city}</p>
//           <p><b>Appointment:</b> {new Date(order.order_date).toLocaleDateString()}</p>
//           <p><b>Notes:</b> {order.order_notes || '—'}</p>

//           {hasLining && (
//             <p>
//               <b>Lining:</b> Yes
//             </p>
//           )}

//           {isRapid && (
//             <p>
//               <b>Stitching Speed:</b> {order.stitching_speed}
//             </p>
//           )}
//         </div>

//         {/* AMOUNT BREAKDOWN */}
//         <div className="drawer-section">
//           <h4>Payment Breakdown</h4>

//           <div className="amount-row">
//             <span>Product Price</span>
//             <span>₹{productPrice.toFixed(2)}</span>
//           </div>

//           {hasLining && (
//             <div className="amount-row">
//               <span>Lining Charge</span>
//               <span>₹{liningPrice.toFixed(2)}</span>
//             </div>
//           )}

//           {isRapid && (
//             <div className="amount-row">
//               <span>Rapid Stitching Charge</span>
//               <span>₹{speedPrice.toFixed(2)}</span>
//             </div>
//           )}

//           {securityDeposit > 0 && (
//             <div className="amount-row">
//               <span>Security Deposit</span>
//               <span>₹{securityDeposit.toFixed(2)}</span>
//             </div>
//           )}

//           <div className="amount-row total">
//             <span>Total</span>
//             <span>₹{computedTotal.toFixed(2)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetailDrawer;




// Version 3 : enhancement to version 2


import '../css/OrderDetailDrawer.css';
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

  const productPrice = Number(order.products_price || 0);
  const securityDeposit = Number(order.security_deposit || 0);
  const liningPrice = Number(order.lining_price || 0);
  const speedPrice = Number(order.speed_price || 0);

  const hasLining = Number(order.has_lining) === 1;
  const isRapid =
    order.stitching_speed &&
    order.stitching_speed.toLowerCase() !== 'standard';

  const computedTotal =
    productPrice +
    securityDeposit +
    (hasLining ? liningPrice : 0) +
    (isRapid ? speedPrice : 0);

  const currentIndex = STATUS_FLOW.indexOf(order.order_status);

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div
        className="drawer premium-drawer"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}
        <div className="drawer-header premium-header">
          <div>
            <h2>Order #{order.order_id}</h2>
            <span
              className="status-pill"
              style={{ background: getStatusColor(order.order_status) }}
            >
              {order.order_status}
            </span>
          </div>
          <button onClick={onClose}>✕</button>
        </div>

        {/* PROGRESS TIMELINE */}
        <div className="drawer-section">
          <div className="progress-container">
            {STATUS_FLOW.map((status, index) => {
              const isDone = index < currentIndex;
              const isActive = index === currentIndex;

              return (
                <div key={status} className="progress-step-wrapper">
                  <div
                    className={`progress-circle 
                      ${isDone ? 'done' : ''} 
                      ${isActive ? 'active' : ''}`}
                  >
                    {isDone ? '✓' : index + 1}
                  </div>
                  <span className={`progress-label ${isActive ? 'active-label' : ''}`}>
                    {status}
                  </span>
                  {index !== STATUS_FLOW.length - 1 && (
                    <div className={`progress-line ${isDone ? 'done-line' : ''}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* DETAILS */}
        <div className="drawer-section card-section">
          <h4>Tailoring Details</h4>
          <div className="details-grid">
            <div><b>Stitch Option:</b> {order.stitch_option}</div>
            <div><b>City:</b> {order.city}</div>
            <div><b>Appointment:</b> {new Date(order.order_date).toLocaleDateString()}</div>
            <div><b>Notes:</b> {order.order_notes || '—'}</div>

            {hasLining && (
              <div className="tag lining-tag">Lining Added</div>
            )}

            {isRapid && (
              <div className="tag rapid-tag">
                {order.stitching_speed} Stitching
              </div>
            )}
          </div>
        </div>

        {/* PRICE SECTION */}
        <div className="drawer-section price-card">
          <h4>Payment Breakdown</h4>

          <div className="amount-row">
            <span>Product Price</span>
            <span>₹{productPrice.toFixed(2)}</span>
          </div>

          {hasLining && (
            <div className="amount-row">
              <span>Lining Charge</span>
              <span>₹{liningPrice.toFixed(2)}</span>
            </div>
          )}

          {isRapid && (
            <div className="amount-row">
              <span>Rapid Stitching</span>
              <span>₹{speedPrice.toFixed(2)}</span>
            </div>
          )}

          {securityDeposit > 0 && (
            <div className="amount-row">
              <span>Security Deposit</span>
              <span>₹{securityDeposit.toFixed(2)}</span>
            </div>
          )}

          <div className="divider-line"></div>

          <div className="amount-row total">
            <span>Total Amount</span>
            <span>₹{computedTotal.toFixed(2)}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderDetailDrawer;

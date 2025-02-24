// Version 1 

// import { useEffect } from "react";
// import React from 'react';
// export const RazorPay = () => {

//     const handlePayment = async () => {
//         var amount = 10;
//         const response = await fetch("https://admee.in:3003/api/cc/create-order", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount }),
//         });
    
//         const { orderId } = await response.json();

      
    
//         const options = {
//           key: "YOUR_RAZORPAY_KEY_ID",
//           amount: amount * 100,
//           currency: "INR",
//           name: "Classbench",
//           description: "Test Payment",
//           order_id: orderId,
//           handler: (response: { razorpay_payment_id: any; }) => {
//             alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//           },
//           prefill: {
//             name: "User Name",
//             email: "user@example.com",
//             contact: "9999999999",
//           },
//           theme: { color: "#3399cc" },
//         };
    
//         const razorpay = new window.Razorpay(options);
//         razorpay.open();
        
//       };
//       return <button onClick={handlePayment}>Pay ₹10</button>;
// }

// export default RazorPay;


// Version 2 : 

// import React, { useEffect, useState } from "react";

// export const RazorPay = () => {
//   const [razorpayLoaded, setRazorpayLoaded] = useState(false);

//   useEffect(() => {
//     // Load Razorpay script dynamically
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     script.onload = () => setRazorpayLoaded(true); // Mark Razorpay as loaded
//     document.body.appendChild(script);
//   }, []);

//   const handlePayment = async () => {
//     if (!razorpayLoaded) {
//       alert("Razorpay SDK is still loading. Please try again.");
//       return;
//     }

//     const amount = 10;
//     const response = await fetch("https://admee.in:3003/api/cc/create-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount }),
//     });

//     const { orderId } = await response.json();

//     const options = {
//       key: "YOUR_RAZORPAY_KEY_ID",
//       amount: amount * 100,
//       currency: "INR",
//       name: "Classbench",
//       description: "Test Payment",
//       order_id: orderId,
//       handler: (response: { razorpay_payment_id: any }) => {
//         alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
//       },
//       prefill: {
//         name: "User Name",
//         email: "user@example.com",
//         contact: "9999999999",
//       },
//       theme: { color: "#3399cc" },
//     };

//     const razorpay = new window.Razorpay(options);
//     razorpay.open();
//   };

//   return <button onClick={handlePayment}>Pay ₹10</button>;
// };

// export default RazorPay;



//  Version 3 

import React, { useEffect } from "react";

export const RazorPay = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    var amount = 1;

    // Create order from your backend
    const response = await fetch("https://admee.in:3003/api/cc/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const { orderId } = await response.json();
    console.log("Order Created:", orderId);

    const options = {
      //key: "rzp_test_ibKEA4VVo2kkgV", // Use test key
      key: "rzp_live_eRPZbHTMQV50Ws", // live 
      amount: amount * 100,
      currency: "INR",
      name: "Classbench",
      description: "Test Payment",
      order_id: orderId, // Order ID from backend
      handler: (response: { razorpay_payment_id: any }) => {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9999999999",
      },
      theme: { color: "#3399cc" },
    };

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return <button onClick={handlePayment}>Pay ₹1</button>;
};

export default RazorPay;

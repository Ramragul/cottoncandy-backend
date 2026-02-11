import React from "react";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> 11 February 2026</p>

      <p>
        Cotton Candy ("we", "our", "us"), operated by SNEKTO, respects your privacy 
        and is committed to protecting your personal information.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Delivery address</li>
        <li>Order details and measurements</li>
        <li>Purchase history</li>
      </ul>

      <h2>2. Payment Information</h2>
      <p>
        Payments are processed securely through third-party payment providers.
        We do not store your card details, CVV, or banking information on our servers.
      </p>

      <h2>3. How We Use Information</h2>
      <ul>
        <li>To process tailoring and rental orders</li>
        <li>To provide customer support</li>
        <li>To send order updates</li>
        <li>To improve our services</li>
      </ul>

      <h2>4. Data Sharing</h2>
      <p>
        We may share necessary information with delivery partners, tailoring teams,
        and payment service providers strictly for order fulfillment.
        We do not sell personal data.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We use reasonable security measures to protect your information.
        However, no online transmission is 100% secure.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your account by contacting us at:
      </p>
      <p>Email: support@cottoncandy.co.in</p>

      <h2>7. Contact Us</h2>
      <p>
        SNEKTO <br />
        Website: https://cottoncandy.co.in <br />
        Email: support@cottoncandy.co.in
      </p>
    </div>
  );
};

export default PrivacyPolicy;

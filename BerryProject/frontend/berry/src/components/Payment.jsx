import React from 'react';

const Payment = () => {
  return (
    <div className="payment-container">
      <h2>Payment Information</h2>

      {/* 1. Accepted Payment Methods */}
      <section>
        <h3>Accepted Payment Methods</h3>
        <div className="payment-methods">
          <p><strong>Credit/Debit Cards:</strong> Visa, MasterCard, American Express</p>
          <p><strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay</p>
          <p><strong>Bank Transfers:</strong> Accepted via online banking</p>
          <p><strong>Buy Now, Pay Later:</strong> Available with Afterpay, Klarna</p>
        </div>
      </section>

      {/* 2. Security Assurance */}
      <section>
        <h3>Security Assurance</h3>
        <div className="security-icons">
          <p>Our site uses secure encryption to protect your transactions:</p>
          <img src="ssl-icon.png" alt="SSL Secured" />
          <img src="secure-payment.png" alt="Secure Payment" />
        </div>
        <p>Your payment information is processed securely. We do not store credit card details and your data is encrypted during transmission.</p>
      </section>

      {/* 3. Currency Information */}
      <section>
        <h3>Currency Information</h3>
        <p>We accept the following currencies: USD, EUR, GBP.</p>
      </section>

      {/* 4. Payment Terms */}
      <section>
        <h3>Payment Terms</h3>
        <p>Payments are processed upon order confirmation. Installment options are available for select payment methods.</p>
      </section>

      {/* 5. Contact Information for Payment Queries */}
      <section>
        <h3>Contact Us</h3>
        <p>If you have any questions regarding payments, please contact us:</p>
        <p>Email: support@berryproject.com</p>
        <p>Phone: +123-456-7890</p>
      </section>
    </div>
  );
};

export default Payment;

import React from 'react';

function ProductCard({ name, price, description }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px 0',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{name}</h3>
      <p style={{ margin: '0 0 8px 0', fontWeight: 'bold', color: '#2e7d32' }}>
        قیمت: {price} تومان
      </p>
      <p style={{ margin: 0, color: '#666' }}>{description}</p>
    </div>
  );
}

export default ProductCard;

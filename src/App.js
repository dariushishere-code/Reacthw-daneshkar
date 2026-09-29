import React, { useState } from 'react';
import ProductCard from './ProductCard';
import UserList from './UserList';

function App() {
  // ========== تمرین ۱: لیست محصولات ==========
  const products = [
    {
      name: 'لپ‌تاپ ایسوس',
      price: 25000000,
      description: 'لپ‌تاپ گیمینگ با پردازنده Core i7 و کارت گرافیک RTX 3060'
    },
    {
      name: 'گوشی سامسونگ Galaxy S24',
      price: 45000000,
      description: 'گوشی پرچمدار با دوربین ۲۰۰ مگاپیکسلی و صفحه نمایش AMOLED'
    },
    {
      name: 'هدفون سونی WH-1000XM5',
      price: 12000000,
      description: 'هدفون بی‌سیم با نویز کنسلینگ پیشرفته و باتری ۳۰ ساعته'
    }
  ];

  // ========== تمرین ۲: input و دکمه ==========
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    console.log('مقدار input:', inputValue);
  };

  // ========== تمرین ۳: لیست کاربران ==========
  const users = [
    { name: 'علی محمدی', age: 28, city: 'تهران' },
    { name: 'سارا احمدی', age: 24, city: 'اصفهان' },
    { name: 'رضا کریمی', age: 31, city: 'شیراز' },
    { name: 'مریم حسینی', age: 27, city: 'مشهد' }
  ];

  return (
    <div style={{
      fontFamily: 'Tahoma, Arial, sans-serif',
      maxWidth: '700px',
      margin: '0 auto',
      padding: '20px',
      direction: 'rtl',
      textAlign: 'right'
    }}>
      <h1 style={{ textAlign: 'center', color: '#5c2d91' }}>
        تمرین‌های React - جلسه ۳
      </h1>

      {/* ========== تمرین ۱ ========== */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#7b1fa2', borderBottom: '2px solid #7b1fa2', paddingBottom: '8px' }}>
          تمرین ۱: لیست محصولات ساده با props
        </h2>
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </section>

      {/* ========== تمرین ۲ ========== */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ color: '#7b1fa2', borderBottom: '2px solid #7b1fa2', paddingBottom: '8px' }}>
          تمرین ۲: دکمه‌ای که متن داخل input را در کنسول نمایش دهد
        </h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="متن خود را وارد کنید..."
            style={{
              flex: 1,
              padding: '10px 14px',
              border: '1px solid #ccc',
              borderRadius: '6px',
              fontSize: '16px',
              fontFamily: 'inherit'
            }}
          />
          <button
            onClick={handleButtonClick}
            style={{
              padding: '10px 20px',
              backgroundColor: '#7b1fa2',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: 'inherit'
            }}
          >
            نمایش در کنسول
          </button>
        </div>
        <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
          بعد از کلیک روی دکمه، کنسول مرورگر (F12) را باز کنید.
        </p>
      </section>

      {/* ========== تمرین ۳ ========== */}
      <section>
        <h2 style={{ color: '#7b1fa2', borderBottom: '2px solid #7b1fa2', paddingBottom: '8px' }}>
          تمرین ۳: نمایش لیست کاربران با props و Fragment
        </h2>
        <UserList users={users} />
      </section>
    </div>
  );
}

export default App;

import React from 'react';

const Homepage = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '50px',
            backgroundColor: '#ffe5e5'
        }}>
            <h1 style={{ color: '#cc0000', fontFamily: 'Arial, sans-serif' }}>
                ยินดีต้อนรับสู่เว็บไซต์เกี่ยวกับระยะคลอด
            </h1>
            <p style={{
                maxWidth: '600px',
                margin: '20px auto',
                fontSize: '18px',
                lineHeight: '1.6'
            }}>
                เรียนรู้และเข้าใจเกี่ยวกับระยะต่าง ๆ ของการคลอดในรูปแบบที่เข้าใจง่าย
                พร้อมภาพประกอบและเนื้อหาที่ครอบคลุม.
            </p>
        </div>
    );
};

export default Homepage;

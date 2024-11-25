import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: 'linear-gradient(to right, #cc0000, #990000)',
            color: '#fff',
            textAlign: 'center',
            padding: '20px 10px',
            marginTop: 'auto',
            position: 'relative',
            bottom: 0,
            width: '100%',
            boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
        }}>
            <p style={{
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '14px',
            }}>
                © 2024 ระยะคลอด - เว็บไซต์ให้ความรู้เกี่ยวกับการคลอด
            </p>
            <p>
                <a
                    href="https://example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: '#fff',
                        textDecoration: 'underline',
                        fontSize: '14px',
                    }}
                >
                    ติดต่อเรา
                </a>
            </p>
        </footer>
    );
};

export default Footer;

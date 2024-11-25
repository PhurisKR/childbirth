import React from 'react';

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: '#ffcccc',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h1 style={{
                color: '#990000',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                fontSize: '24px'
            }}>ระยะคลอด</h1>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                margin: 0,
                padding: 0
            }}>
                {['หน้าแรก', 'ระยะคลอด', 'ติดต่อเรา'].map((item, index) => (
                    <li key={index} style={{ margin: '0 15px' }}>
                        <a href={`#${item}`} style={{
                            textDecoration: 'none',
                            color: '#990000',
                            fontSize: '16px',
                            fontWeight: 'bold'
                        }}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;

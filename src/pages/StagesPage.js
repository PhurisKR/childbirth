
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useEffect } from 'react';

import image1 from '../assets/state1.png';
import image2 from '../assets/state2.png';
import image3 from '../assets/state3.png';

AOS.init();

const stages = [
    {
        title: 'ระยะที่ 1: การเปิดปากมดลูก',
        description: 'ในระยะนี้ปากมดลูกจะเปิดถึง 10 ซม. ใช้เวลานานที่สุด.',
        image: image1,
    },
    {
        title: 'ระยะที่ 2: การคลอดทารก',
        description: 'ในระยะนี้ทารกจะเคลื่อนผ่านช่องคลอดและออกมา.',
        image: image2,
    },
    {
        title: 'ระยะที่ 3: การคลอดรก',
        description: 'ในระยะนี้รกและเนื้อเยื่ออื่น ๆ จะถูกขับออก.',
        image: image3,
    },
];

const StagesPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div style={{
            padding: '50px',
            background: 'linear-gradient(to bottom, #fff6f6, #ffe5e5)',
            minHeight: '100vh',
        }}>
            <h2 style={{
                textAlign: 'center',
                color: '#cc0000',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '32px',
                marginBottom: '40px',
            }}>
                ระยะของการคลอด
            </h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px',
                padding: '0 20px',
            }}>
                {stages.map((stage, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        style={{
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease-in-out',
                            backgroundColor: '#fff',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <img
                            src={stage.image}
                            alt={stage.title}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderBottom: '4px solid #ffe5e5',
                            }}
                        />
                        <div style={{
                            padding: '15px',
                        }}>
                            <h3 style={{
                                color: '#cc0000',
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: '20px',
                                marginBottom: '10px',
                            }}>
                                {stage.title}
                            </h3>
                            <p style={{
                                color: '#333',
                                fontSize: '16px',
                                lineHeight: '1.6',
                            }}>
                                {stage.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StagesPage;

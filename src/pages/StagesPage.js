import React, { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

import image1 from '../assets/state1.png';
import image2 from '../assets/state2.png';
import image3 from '../assets/state3.png';

const stages = [
    {
        title: 'ระยะที่ 1: การเปิดปากมดลูก',
        description: 'ในระยะนี้ปากมดลูกจะเปิดถึง 10 ซม. ใช้เวลานานที่สุด.',
        image: image1,
        id: 'stage1',
        details: (
            <div>
                <h3>ระยะที่ 1 เป็นระยะที่ยาวที่สุดของการคลอด</h3>
                <p>
                    ระยะนี้มีความสำคัญสำหรับการเตรียมตัวของร่างกายเพื่อให้ทารกเคลื่อนผ่านทางช่องคลอด
                    เริ่มตั้งแต่การเจ็บท้องครั้งแรกจนถึงปากมดลูกเปิดเต็มที่ (10 ซม.)
                    แบ่งออกเป็น 2 ช่วงสำคัญ:
                </p>
                <h4>ระยะเริ่มต้น (Latent Phase):</h4>
                <ul>
                    <li><strong>ลักษณะ:</strong> ปากมดลูกเริ่มเปิดจาก 0 ถึง 3 ซม. เจ็บเบา ๆ ไม่สม่ำเสมอ</li>
                    <li><strong>ระยะเวลา:</strong> อาจกินเวลาหลายชั่วโมงถึงหลายวัน</li>
                    <li><strong>การดูแล:</strong> ผ่อนคลายด้วยการเดินเบา ๆ, ฝึกการหายใจลึก ๆ, พักผ่อนเพียงพอ</li>
                </ul>
                <h4>ระยะเร่ง (Active Phase):</h4>
                <ul>
                    <li><strong>ลักษณะ:</strong> ปากมดลูกเปิดจาก 4 ถึง 10 ซม. การเจ็บท้องถี่และรุนแรงขึ้น</li>
                    <li><strong>ระยะเวลา:</strong> โดยเฉลี่ย 4-8 ชั่วโมง</li>
                    <li>
                        <strong>การดูแล:</strong> อยู่ในโรงพยาบาลเพื่อดูแลใกล้ชิด, ใช้เทคนิคการหายใจและการผ่อนคลาย,
                        แพทย์อาจให้ยาลดความเจ็บปวด เช่น Epidural
                    </li>
                </ul>
                <p><em>หมายเหตุ:</em> การเปิดปากมดลูกจนถึง 10 ซม. คือสัญญาณว่าพร้อมสำหรับระยะที่ 2</p>
            </div>
        ),
    },
    {
        title: 'ระยะที่ 2: การคลอดทารก',
        description: 'ในระยะนี้ทารกจะเคลื่อนผ่านช่องคลอดและออกมา.',
        image: image2,
        id: 'stage2',
        details: (
            <div>
                <h3>ระยะที่ 2 เป็นช่วงที่ทารกคลอดออกมาสู่โลกภายนอก</h3>
                <h4>ลักษณะของระยะนี้:</h4>
                <ul>
                    <li>การเจ็บท้องเป็นระลอกอย่างต่อเนื่องและรุนแรง</li>
                    <li>หัวของทารกเริ่มปรากฏที่ช่องคลอด (Crowning)</li>
                    <li>รู้สึกแรงดันอย่างมากบริเวณกระดูกเชิงกราน</li>
                </ul>
                <h4>ขั้นตอนสำคัญ:</h4>
                <ul>
                    <li>
                        <strong>การเบ่ง:</strong> แพทย์ช่วยแนะนำวิธีเบ่งที่ถูกต้อง โดยหายใจเข้าลึก ๆ ก่อนการเบ่ง
                        และหายใจออกช้า ๆ หลังการเบ่ง
                    </li>
                    <li>
                        <strong>การช่วยเหลือทางการแพทย์:</strong> หากการคลอดไม่คืบหน้า อาจใช้เครื่องมือช่วย
                        เช่น คีมจับ (Forceps) หรือเครื่องดูดสุญญากาศ (Vacuum)
                    </li>
                </ul>
                <h4>ระยะเวลา:</h4>
                <ul>
                    <li>ครั้งแรก: ประมาณ 1-2 ชั่วโมง</li>
                    <li>เคยคลอดแล้ว: ประมาณ 20-30 นาที</li>
                </ul>
                <h4>สิ่งที่ควรทราบ:</h4>
                <p>หากทารกมีขนาดใหญ่หรืออยู่ในท่าผิดปกติ แพทย์อาจพิจารณาการผ่าคลอด</p>
            </div>
        ),
    },
    {
        title: 'ระยะที่ 3: การคลอดรก',
        description: 'ในระยะนี้รกและเนื้อเยื่ออื่น ๆ จะถูกขับออก.',
        image: image3,
        id: 'stage3',
        details: (
            <div>
                <h3>ระยะที่ 3 เป็นช่วงที่รกถูกขับออกจากมดลูก</h3>
                <h4>ลักษณะของระยะนี้:</h4>
                <ul>
                    <li>การหดตัวของมดลูกช่วยให้รกหลุดออกจากผนังมดลูก</li>
                    <li>แพทย์อาจช่วยโดยการกดเบา ๆ บริเวณหน้าท้อง</li>
                    <li>อาจรู้สึกเจ็บเล็กน้อยขณะรกถูกขับออก</li>
                </ul>
                <h4>ระยะเวลา:</h4>
                <ul>
                    <li>โดยเฉลี่ย 10-30 นาที</li>
                    <li>หากรกไม่หลุดออกเอง แพทย์จะช่วยนำออก</li>
                </ul>
                <h4>การดูแล:</h4>
                <ul>
                    <li>ตรวจสอบว่ารกถูกขับออกสมบูรณ์</li>
                    <li>ให้ยาหดมดลูก (Oxytocin) เพื่อช่วยให้มดลูกหดตัวเร็วขึ้น</li>
                    <li>ป้องกันการตกเลือดหลังคลอด</li>
                </ul>
                <h4>สิ่งที่ควรทราบ:</h4>
                <p>การตกเลือดหลังคลอดอาจเกิดขึ้นได้ แพทย์จะดูแลทันทีหากเกิดภาวะดังกล่าว</p>
            </div>
        ),
    },
];

const StagesPage = () => {
    const stageRefs = {
        stage1: useRef(null),
        stage2: useRef(null),
        stage3: useRef(null),
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleScrollTo = (id) => {
        stageRefs[id].current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={{ padding: '50px 20px', background: 'linear-gradient(to bottom, #ffe5e5, #fff6f6)' }}>
            <h2 style={{ textAlign: 'center', color: '#ff6363', fontSize: '32px', marginBottom: '40px' }}>
                ระยะของการคลอด
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {stages.map((stage, index) => (
                    <div
                        key={index}
                        className="card"
                        data-aos="fade-up"
                        onClick={() => handleScrollTo(stage.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={stage.image} alt={stage.title} />
                        <div className="card-content">
                            <h3>{stage.title}</h3>
                            <p>{stage.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {stages.map((stage, index) => (
                <div
                    key={index}
                    ref={stageRefs[stage.id]}
                    id={stage.id}
                    style={{
                        marginTop: '50px',
                        padding: '30px',
                        background: '#fff',
                        borderRadius: '10px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                    }}
                    data-aos="fade-up"
                >
                    <h2 style={{ color: '#ff6363', textAlign: 'center', marginBottom: '20px' }}>{stage.title}</h2>
                    <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>{stage.details}</div>
                </div>
            ))}
        </div>
    );
};

export default StagesPage;

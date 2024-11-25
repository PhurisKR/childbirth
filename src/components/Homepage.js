import React from 'react';
import StageCard from '../components/StageCard';
import image1 from '../assets/state1.png'
import image2 from '../assets/state2.png'
import image3 from '../assets/state3.png'

const stages = [
    {
        title: 'ระยะ 1: การเปิดปากมดลูก',
        description: 'ระยะที่ปากมดลูกเริ่มเปิด',
        image: image1,
    },
    {
        title: 'ระยะ 2: การคลอดทารก',
        description: 'ทารกเคลื่อนผ่านช่องคลอด',
        image: image2,
    },
    {
        title: 'ระยะ 3: การคลอดรก',
        description: 'รกถูกขับออกจากร่างกาย',
        image: image3,
    },
];

const Homepage = () => {
    return (
        <div>
            <h1>รู้จักระยะคลอด</h1>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                {stages.map((stage, index) => (
                    <StageCard 
                        key={index}
                        title={stage.title}
                        description={stage.description}
                        image={stage.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Homepage;

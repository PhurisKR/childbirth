import React from 'react';

const StageCard = ({ title, description, image }) => {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '10px',
            margin: '10px',
            maxWidth: '300px',
            textAlign: 'center'
        }}>
            <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default StageCard;

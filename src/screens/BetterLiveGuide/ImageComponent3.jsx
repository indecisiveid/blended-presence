import React from 'react';
import ImageComponent3 from './imageTeresa.png';
import "./style.css";

const thirdImage = () => {
    return (
        <div>
            <img src={ImageComponent3} alt="Image of Teresa" className="resized-image"/>
        </div>
    );
}

export default thirdImage;
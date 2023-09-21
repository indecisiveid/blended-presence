import React from 'react';
import ImageComponent from './imageBob.png';
import "./style.css";

const firstImage = () => {
    return (
        <div>
            <img src={ImageComponent} alt="Image of Bob" className="resized-image"/>
        </div>
    );
}

export default firstImage;

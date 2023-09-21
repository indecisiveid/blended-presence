import React from 'react';
import ImageComponent2 from './imageGru.png';
import "./style.css";

const secondImage = () => {
    return (
        <div>
            <img src={ImageComponent2} alt="Image of Gru" className="resized-image"/>
        </div>
    );
}

export default secondImage;

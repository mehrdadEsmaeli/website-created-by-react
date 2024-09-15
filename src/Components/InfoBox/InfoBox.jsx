import React from 'react';
import "./InfoBox.css";

function InfoBox({title, text}) {
    return (
        <div className="info__box">
            <span className="info__box-icon"><img src="./images/Frame 21.svg" alt="" /></span>
            <p className="info__box-title">{title}</p>
            <p className="info__box-text">{text}</p>
        </div>
    )
}

export default InfoBox
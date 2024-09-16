import React, { useEffect, useRef } from 'react';

function Plan(props) {
    const planElement = useRef();
    // const planContainer = useRef();
    useEffect(()=>{
        planElement.current.style.marginTop = props.mTop;
        // planContainer.current.style.backgroundColor = props.bgColor;
    })
    return (
        <div ref={planElement} className="plan">
            <div className="plan-container">
                <p className="plan__title">{props.title}</p>
                <div className="price-div">
                    <span className="price-number">${props.price}</span>
                    <span className="price-month">mounthly</span>
                </div>
                <div className="plan-div-btn">
                    <div className="btn plan-btn">get start for free</div>
                </div>
                <ul className="plan-options">
                    <li className="plan-option">Up to 50 project members</li>
                    <li className="plan-option">Unlimited tasks and projects</li>
                    <li className="plan-option">50GB storage</li>
                    <li className="plan-option">Advanced support</li>
                    <li className="plan-option">Export support</li>
                </ul>
            </div>
        </div>
    )
}

export default Plan
import React from 'react';
import "./Plans.css";
import Plan from './Plan/Plan';

function Plans() {
  return (
    <div className="plans-container">
        <div className="plans">
           <Plan mTop="0px" title="ultmate" price="50" /> 
           <Plan mTop="125px" title="pro" price="19"/>
           <Plan mTop="210px" title="free" price="0"/>
        </div>
    </div>
  )
}

export default Plans
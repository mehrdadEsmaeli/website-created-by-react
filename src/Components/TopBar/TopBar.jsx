import React from 'react';

import "./TopBar.css";

function TopBar({title}) {
  return (
    <div className="top-bar-div">
        <p className="top-bar__title">{title}</p>
    </div>
  )
}

export default TopBar
import React from 'react';
import TopBar from '../../Components/TopBar/TopBar';
import NavBar from '../../Components/NavBar/NavBar';
import HeadeMain from '../../Components/HeaderMain/HeadeMain';
import "./Header.css";

function Header() {
    return (
        <header>
            <TopBar title="این یک تاپ بار هست ...." />
            <NavBar />
            <HeadeMain />
        </header>
    )
}

export default Header
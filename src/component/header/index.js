import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/react.png';


const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="LOGO" />
                </div>
            </div>
        </header>
    )
};

export default Header;
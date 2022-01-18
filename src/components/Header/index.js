import React, { useState } from 'react';
import "./header.css";
import Mobile from './mobile/index';
import Web from './web/index';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="logo">Kendra's Portfolio</div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                    <img src={process.env.PUBLIC_URL + '/images/menu-32.png'} alt="icon" />
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header;

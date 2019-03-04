import React from 'react';
import './Header.css';
import bagicon from '../../assets/images/bagicon.png';

const Header = () => (
    <div className="header">
        <div className="headerItem">£</div>
        <div className="headerItem"><img src={bagicon} alt="B" style={{ width: '50%'}}/></div>
        <div className="headerItem">11:59</div>
    </div>
);

export default Header;
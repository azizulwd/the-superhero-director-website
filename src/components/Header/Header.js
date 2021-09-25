import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="name">
                        <h1>University member Campaign</h1>
                        <p>Best top Bangladeshi University List</p>
                    </div>
                    <div className="budget">
                        <h2>Total Budget: 50000 BDT</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router';
import './Header.css';
import Clock from './Clock.js';
function movepage(){
    location.href = "/view"
}
const MenuItem = ({active, children, to}) => (
    <Link to={to} className={`menu-item ${active ? 'active': ''}`}>
            {children}
    </Link>
);

const Header = (props, context) => {
    const { router } = context;
    return (
        <div>
            <div className="logo">
                Noote
            </div>
            
            <div className="menu">
                <MenuItem to={'/'} active={router.isActive('/', true)}>HOME</MenuItem>
                <MenuItem to={'/search'} active={router.isActive('/search')}>Search</MenuItem>
                <MenuItem to={'/view'} active={router.isActive('/view')}>View</MenuItem>
                <MenuItem to={'/setting'} active={router.isActive('/setting')}>Setting</MenuItem>
                <MenuItem to={'/calender'} active={router.isActive('/calender')}>Calender</MenuItem>
                <Clock/>
                
            </div>
        </div>
    );
};

Header.contextTypes = {
    router: React.PropTypes.object
}

export default Header;
